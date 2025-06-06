import { users, type User, type InsertUser, type InsertContact, type ContactSubmission, contactSubmissions, type InsertWorkerRegistration, type WorkerRegistration, workerRegistrations } from "@shared/schema";

// Interface defining storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact & { createdAt: string }): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createWorkerRegistration(worker: InsertWorkerRegistration & { createdAt: string }): Promise<WorkerRegistration>;
  getWorkerRegistrations(): Promise<WorkerRegistration[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private workers: Map<number, WorkerRegistration>;
  private currentUserId: number;
  private currentContactId: number;
  private currentWorkerId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.workers = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentWorkerId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertContact: InsertContact & { createdAt: string }): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contact: ContactSubmission = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }

  async createWorkerRegistration(insertWorker: InsertWorkerRegistration & { createdAt: string }): Promise<WorkerRegistration> {
    const id = this.currentWorkerId++;
    const worker: WorkerRegistration = { ...insertWorker, id, status: "pending" };
    this.workers.set(id, worker);
    return worker;
  }

  async getWorkerRegistrations(): Promise<WorkerRegistration[]> {
    return Array.from(this.workers.values());
  }
}

export const storage = new MemStorage();

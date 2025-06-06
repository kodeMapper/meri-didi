import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  service: true,
  message: true,
});

export const workerRegistrations = pgTable("worker_registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  gender: text("gender").notNull(), // "male", "female", "other"
  serviceType: text("service_type").notNull(), // "cleaning", "cooking", "childcare", "eldercare", "gardening", "other"
  experience: text("experience").notNull(),
  availability: text("availability").notNull(), // "full-time", "part-time", "weekends"
  idType: text("id_type").notNull(), // "aadhar", "pan", "passport", "driving-license"
  idNumber: text("id_number").notNull(),
  dob: text("dob").notNull(), // stored as ISO string
  bio: text("bio").notNull(),
  status: text("status").notNull().default("pending"), // "pending", "approved", "rejected"
  createdAt: text("created_at").notNull(),
});

export const insertWorkerRegistrationSchema = createInsertSchema(workerRegistrations).pick({
  name: true,
  email: true,
  phone: true,
  address: true,
  city: true,
  gender: true,
  serviceType: true,
  experience: true,
  availability: true,
  idType: true,
  idNumber: true,
  dob: true,
  bio: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertWorkerRegistration = z.infer<typeof insertWorkerRegistrationSchema>;
export type WorkerRegistration = typeof workerRegistrations.$inferSelect;

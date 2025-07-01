import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import path from 'path';
import { z } from 'zod';

// Copy the schema definitions locally
const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(1, "Message is required")
});

const insertWorkerRegistrationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  serviceType: z.string().min(1, "Service type is required"),
  experience: z.string().min(1, "Experience is required"),
  idType: z.string().min(1, "ID type is required"),
  idNumber: z.string().min(1, "ID number is required"),
  bio: z.string().min(1, "Bio is required")
});

// Simple in-memory storage for Vercel
class SimpleStorage {
  private contacts: any[] = [];
  private workers: any[] = [];
  private contactId = 1;
  private workerId = 1;

  async createContactSubmission(contact: any) {
    const submission = {
      id: this.contactId++,
      ...contact,
      createdAt: new Date().toISOString()
    };
    this.contacts.push(submission);
    return submission;
  }

  async createWorkerRegistration(worker: any) {
    const registration = {
      id: this.workerId++,
      ...worker,
      createdAt: new Date().toISOString()
    };
    this.workers.push(registration);
    return registration;
  }
}

const storage = new SimpleStorage();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up CORS headers for API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }
  }
  next();
});

// Initialize app once
let appInitialized = false;

const initializeApp = async () => {
  if (appInitialized) return;
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const now = new Date().toISOString();
      
      const submission = await storage.createContactSubmission({
        ...contactData,
        createdAt: now
      });
      
      res.status(201).json({
        message: "Contact submission received",
        data: submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid submission data",
          errors: error.errors
        });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({
          message: "Internal server error"
        });
      }
    }
  });

  // Worker registration endpoint
  app.post("/api/register-worker", async (req, res) => {
    try {
      console.log("Received worker registration request:", req.body);
      
      const normalizedData = {
        ...req.body,
        serviceType: req.body.serviceType || req.body.service || req.body.service_type,
        experience: req.body.experience || req.body.exp,
        idType: req.body.idType || req.body.id_type,
        idNumber: req.body.idNumber || req.body.id_number,
        bio: req.body.bio || req.body.about
      };
      
      const workerData = insertWorkerRegistrationSchema.parse(normalizedData);
      const now = new Date().toISOString();
      
      const registration = await storage.createWorkerRegistration({
        ...workerData,
        createdAt: now
      });
      
      const referenceId = `WRK-${Math.floor(100000 + Math.random() * 900000)}`;
      
      res.status(201).json({
        message: "Worker registration submitted successfully",
        data: registration,
        referenceId: referenceId
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid registration data",
          errors: error.errors
        });
      } else {
        console.error("Error processing worker registration:", error);
        res.status(500).json({
          message: "Internal server error"
        });
      }
    }
  });
  
  app.use((err: any, req: any, res: any, next: any) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // For production mode serving static files
  const distPath = path.resolve(__dirname, '../dist/public');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
  
  appInitialized = true;
};

export default async (req: VercelRequest, res: VercelResponse) => {
  await initializeApp();
  return app(req as any, res as any);
};

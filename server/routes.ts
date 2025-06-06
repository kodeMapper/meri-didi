import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema, insertWorkerRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const now = new Date().toISOString();
      
      // Store contact submission
      const submission = await storage.createContactSubmission({
        ...contactData,
        createdAt: now
      });
      
      // Return success response
      res.status(201).json({
        message: "Contact submission received",
        data: submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
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
      
      // Try to normalize the data to match expected schema
      const normalizedData = {
        ...req.body,
        // Map common field name variations
        serviceType: req.body.serviceType || req.body.service || req.body.service_type,
        experience: req.body.experience || req.body.exp,
        idType: req.body.idType || req.body.id_type,
        idNumber: req.body.idNumber || req.body.id_number,
        bio: req.body.bio || req.body.about
      };
      
      console.log("Normalized request data:", normalizedData);
      
      // Validate request body
      const workerData = insertWorkerRegistrationSchema.parse(normalizedData);
      
      console.log("Validated worker data:", workerData);
      
      // Add timestamp
      const now = new Date().toISOString();
      
      // Store worker registration
      const registration = await storage.createWorkerRegistration({
        ...workerData,
        createdAt: now
      });
      
      // Return success response with reference ID
      const referenceId = `WRK-${Math.floor(100000 + Math.random() * 900000)}`;
      
      res.status(201).json({
        message: "Worker registration submitted successfully",
        data: registration,
        referenceId: referenceId
      });
    } catch (error) {
      if (error instanceof ZodError) {
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

  const httpServer = createServer(app);

  return httpServer;
}

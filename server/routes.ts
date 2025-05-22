import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
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

  const httpServer = createServer(app);

  return httpServer;
}

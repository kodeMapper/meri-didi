import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';
import path from 'path';

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
  
  await registerRoutes(app);
  
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

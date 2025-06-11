// Minimal API route for feedback (Vite/Node/Express-style, for deployment on Vercel/Netlify or local dev)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { sentiment, ip, deviceId } = req.body;
  if (!sentiment || !ip || !deviceId) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }
  try {
    const feedback = await prisma.feedback.create({
      data: {
        sentiment,
        ip,
        deviceId,
      },
    });
    res.status(200).json({ success: true, feedback });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
}

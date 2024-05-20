import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'Bienvenido a payana';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access denied, token missing!' });

  try {
    const decoded = jwt.verify(token, secret);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token!' });
  }
};

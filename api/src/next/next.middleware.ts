// src/next/next.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

@Injectable()
export class NextMiddleware implements NestMiddleware {
  async use(req: Request, res: Response) {
    await app.prepare();
    handle(req, res);
  }
}

import type {Request, Response} from 'express';
import {createServerApp} from '../server/app.ts';

const appPromise = createServerApp();

export default async function handler(req: Request, res: Response) {
  const app = await appPromise;
  return app(req, res);
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {
  // eslint-disable-next-line class-methods-use-this
  use(req: Request, res: Response, next: Function) {
    // console.log('Request...');
    next();
  }
}

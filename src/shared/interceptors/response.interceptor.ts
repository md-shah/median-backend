import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { response } from 'express';

@Injectable()
export default class ResponseInterceptor implements NestInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const call$ = next.handle();
    const request = context.switchToHttp().getRequest();
    return call$.pipe(
      map(data => ({
        statusCode: response.statusCode,
        data,
        timestamp: new Date(),
      })),
    );
  }
}

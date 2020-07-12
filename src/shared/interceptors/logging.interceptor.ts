import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';

@Injectable()
export default class LoggingInterceptor implements NestInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const call$ = next.handle();
    if (process.env.NODE_ENV !== 'development') {
      return call$;
    }
    const request = context.switchToHttp().getRequest();
    const content = `${request.method} -> ${request.url}`;
    // eslint-disable-next-line no-console
    console.log('+++ Received request:', content);
    const now = Date.now();
    return call$.pipe(
      // eslint-disable-next-line no-console
      tap(() => console.log('--- Response:', content, `${Date.now() - now}ms`)),
    );
  }
}

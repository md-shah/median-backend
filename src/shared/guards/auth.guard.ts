import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export default class AuthGuard implements CanActivate {
  // eslint-disable-next-line class-methods-use-this
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // Todo: Need to return the generic function which validates the request
    // return this.validateRequest(request);
    return request;
  }
}

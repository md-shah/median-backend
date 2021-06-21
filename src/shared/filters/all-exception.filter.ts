import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { errorTransformer } from '../transformers/error.transformer';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log("Inside exception");
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const formattedError = errorTransformer(exception);
    response.status(formattedError.status).json({
      statusCode: formattedError.status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: formattedError.message[0],
      errors: formattedError.message,
    });
  }
}

// Convert data into some specific format. Eg third part service provider like EzyPay is
// is having a different error format and other stripe will be having separate format.
// So in order to make the format into readable form, we use this

import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';

interface FormattedError {
  status: number;

  message: string[];
}

export function errorTransformer(exception: any): FormattedError {
  let formattedException: string[] = [];

  if (exception instanceof HttpException) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    formattedException = exception.response.message;
  }

  if (exception.name === 'SequelizeUniqueConstraintError') {
    exception.errors.map(e => formattedException.push(e.message));
  }

  if (exception.name === 'SequelizeDatabaseError') {
    formattedException.push(exception.message);
  }

  return {
    status:
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR,
    message:
      formattedException.length > 0 ? formattedException : [exception.message],
  };
}

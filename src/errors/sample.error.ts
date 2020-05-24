// eslint-disable-next-line max-classes-per-file
import { HttpException, HttpStatus } from '@nestjs/common';

export class HttpBadRequestError extends HttpException {
  constructor(error?: any) {
    super(error, HttpStatus.BAD_REQUEST);
  }
}

export class MajorErrorToPerformRollBack extends HttpException {
  private performRollBack: boolean;

  private body: object;

  constructor(performRollBack: boolean, responseCode: string, body: object) {
    super(responseCode, HttpStatus.SERVICE_UNAVAILABLE);
    this.performRollBack = performRollBack;
    this.body = body;
  }
}

// Above example will be,
// try {
//   throw new MajorErrorToPerformRollBack( true, "PAYMENT_GATEWAY_SERVICE_UNAVAILABLE", {
//     // Data for rollback process
//     transactionID: "someID987"
//   })
// }

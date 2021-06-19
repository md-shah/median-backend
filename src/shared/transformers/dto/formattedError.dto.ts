import { HttpStatus } from '@nestjs/common';

export default class FormattedErrorDto {
  message: string | string[];
}

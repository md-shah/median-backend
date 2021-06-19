import { ValidationError } from 'class-validator';
import { BadRequestException, HttpException } from '@nestjs/common';

export function ClassValidatorTransformer(
  validationErrors: ValidationError[] = [],
) {
  throw new BadRequestException(
    [].concat(
      ...validationErrors.map(singleField => {
        return Object.keys(singleField.constraints).map(key => {
          return singleField.constraints[key];
        });
      }),
    ),
  );
}

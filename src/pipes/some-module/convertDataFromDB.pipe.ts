import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export default class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype) {
      return value;
    }
    const convertedValue = this.plainToClass(metatype, value);
    return convertedValue;
  }

  // eslint-disable-next-line class-methods-use-this
  plainToClass(metatype: any, value: any) {
    // Some conversion goes here
    return metatype;
  }
}

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export default class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { metatype: metaType } = metadata;
    if (!metaType) {
      return value;
    }
    return this.plainToClass(metaType, value);
  }

  // eslint-disable-next-line class-methods-use-this
  plainToClass(metaType: any, value: any) {
    // Some conversion goes here
    return {
      metaType,
      value,
    };
  }
}

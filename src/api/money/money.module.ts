import { Module } from '@nestjs/common';
import MoneyServiceV1 from './v1/money.service';
import MoneyControllerV1 from './v1/money.controller';

@Module({
  controllers: [MoneyControllerV1],
  providers: [MoneyServiceV1],
})
export default class MoneyModule {}

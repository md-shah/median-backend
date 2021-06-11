import { Module } from '@nestjs/common';
import ApiController from './api.controller';
import UserModule from './user/user.module';
import MoneyModule from './money/money.module';

@Module({
  controllers: [ApiController],
  imports: [UserModule, MoneyModule],
})
export default class ApiModule {}

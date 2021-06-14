import { Module } from '@nestjs/common';
import ApiController from './api.controller';
import UserModule from './user/user.module';
import MoneyModule from './money/money.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [ApiController],
  imports: [UserModule, MoneyModule, AuthModule],
})
export default class ApiModule {}

import { Module } from '@nestjs/common';
import ApiController from './api.controller';
import UserModule from './user/user.module';

@Module({
  controllers: [ApiController],
  imports: [UserModule],
})
export default class ApiModule {}

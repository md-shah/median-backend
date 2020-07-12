import { Module } from '@nestjs/common';
import UserServiceV1 from './v1/user.service';
import UserControllerV1 from './v1/user.controller';
import UserControllerV2 from './v2/user.controller';
import UserServiceV2 from './v2/user.service';

@Module({
  controllers: [UserControllerV1, UserControllerV2],
  providers: [UserServiceV1, UserServiceV2],
})
export default class UserModule {}

import { Module } from '@nestjs/common';
import UserServiceV1 from './v1/user.service';
import UserControllerV1 from './v1/user.controller';
import { UserProviders } from './user.provider';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UserControllerV1],
  providers: [UserServiceV1, ...UserProviders],
  exports: [UserServiceV1],
})
export default class UserModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import UserModule from '../user/user.module';

@Module({
  imports: [PassportModule, UserModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}

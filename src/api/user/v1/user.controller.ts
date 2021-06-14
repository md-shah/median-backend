import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../../models/user.model';
import UserServiceV1 from './user.service';
import { UserSignupDtoIn, UserSignupDtoOut } from './dto/user.dto';
import { LocalStrategy } from '../../auth/local.strategy';
import { LocalAuthGuard } from '../../auth/local.auth-guard';

@ApiTags('User')
@Controller('/user/v1/')
export default class UserControllerV1 {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userService: UserServiceV1) {}

  private message: string;

  @Post('/signup')
  async signup(
    @Body() userDetails: UserSignupDtoIn,
  ): Promise<UserSignupDtoOut> {
    // eslint-disable-next-line no-return-await
    return this.userService.addUser(userDetails);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}

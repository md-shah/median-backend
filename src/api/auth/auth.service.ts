import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserServiceV1 from '../user/v1/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserServiceV1, private jwtService: JwtService) {
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(email);

    if (user && user.password === password) {
      delete user.dataValues.password;
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

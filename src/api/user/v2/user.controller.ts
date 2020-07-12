import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('/v2/user')
export default class UserControllerV2 {
  private message: string;

  @Get()
  findAll(): string {
    this.message = 'User v2 invoked';
    return this.message;
  }
}

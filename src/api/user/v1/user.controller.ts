import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('/deprecated/v1/user')
export default class UserControllerV1 {
  private message: string;

  @Get()
  findAll(): string {
    this.message = 'User v1 invoked';
    return this.message;
  }
}

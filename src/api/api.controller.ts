import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Default')
@Controller()
export default class ApiController {
  private message: string;

  @Get()
  respondStatus(): string {
    this.message = 'System Running normal';
    return this.message;
  }
}

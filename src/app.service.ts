import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  private readonly message: string;

  constructor() {
    this.message = 'Backend is up and running!';
  }

  getHello(): string {
    return this.message;
  }
}

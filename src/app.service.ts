import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am Léon and I am using Nestjs for HelloKin backend server';
  }

  getSomething(): string {
    return 'Something can be also sent back too';
  }
}

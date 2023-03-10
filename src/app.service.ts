import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to HelloKin backend server';
  }

  //Trying to add a root
  getSomething(): string {
    return 'Something can be also sent back too';
  }
}

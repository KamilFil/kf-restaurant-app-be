import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('dadawd');
    return 'Hello World!';
  }
}

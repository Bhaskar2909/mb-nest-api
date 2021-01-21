import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAbout(): string {
  return 'Hi its takes you to about page';
  }
  getHello(): string {
    return 'Hello World!: bhaskar minupuri';
  }
}

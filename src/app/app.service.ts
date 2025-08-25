import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Aayush Ghimire - My Boilerplate 2025!';
  }
}

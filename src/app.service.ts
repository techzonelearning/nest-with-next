import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAli(): string {
    return 'Hello';
  }
}

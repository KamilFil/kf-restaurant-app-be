import { Inject, Injectable } from '@nestjs/common';
import { EmailSendingService } from './email-sending/email-sending.service';
import { testTemplate } from './templates/email/test-template';

@Injectable()
export class AppService {
  constructor(
    @Inject(EmailSendingService)
    private emailSendingService: EmailSendingService,
  ) {}

  async getHello(): Promise<string> {
    await this.emailSendingService.sendMail(
      'email@ema.pl',
      'Dziękujemy za dodanie do koszyka',
      testTemplate(),
    );

    return 'Hello World!';
  }
}

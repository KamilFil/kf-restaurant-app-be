import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailSendingService {
  constructor(private readonly emailSendingService: MailerService) {}

  async sendMail(to: string, subject: string, html: string): Promise<any> {
    await this.emailSendingService.sendMail({
      to,
      subject,
      html,
    });
  }
}

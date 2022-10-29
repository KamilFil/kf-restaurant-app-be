import { Module } from '@nestjs/common';
import { EmailSendingService } from './email-sending.service';
import mailconfig = require('../config/email.config');
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule.forRoot(mailconfig)],
  providers: [EmailSendingService],
  exports: [EmailSendingService],
})
export class EmailSendingModule {}

import { Module } from '@nestjs/common';
import { EmailSendingService } from './email-sending.service';
import { EmailSendingController } from './email-sending.controller';

@Module({
  controllers: [EmailSendingController],
  providers: [EmailSendingService],
})
export class EmailSendingModule {}

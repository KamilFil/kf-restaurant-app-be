import { Injectable } from '@nestjs/common';
import { CreateEmailSendingDto } from './dto/create-email-sending.dto';
import { UpdateEmailSendingDto } from './dto/update-email-sending.dto';

@Injectable()
export class EmailSendingService {
  create(createEmailSendingDto: CreateEmailSendingDto) {
    return 'This action adds a new emailSending';
  }

  findAll() {
    return `This action returns all emailSending`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailSending`;
  }

  update(id: number, updateEmailSendingDto: UpdateEmailSendingDto) {
    return `This action updates a #${id} emailSending`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailSending`;
  }
}

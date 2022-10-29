import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmailSendingService } from './email-sending.service';
import { CreateEmailSendingDto } from './dto/create-email-sending.dto';
import { UpdateEmailSendingDto } from './dto/update-email-sending.dto';

@Controller('email-sending')
export class EmailSendingController {
  constructor(private readonly emailSendingService: EmailSendingService) {}

  @Post()
  create(@Body() createEmailSendingDto: CreateEmailSendingDto) {
    return this.emailSendingService.create(createEmailSendingDto);
  }

  @Get()
  findAll() {
    return this.emailSendingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailSendingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmailSendingDto: UpdateEmailSendingDto,
  ) {
    return this.emailSendingService.update(+id, updateEmailSendingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailSendingService.remove(+id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailSendingDto } from './create-email-sending.dto';

export class UpdateEmailSendingDto extends PartialType(CreateEmailSendingDto) {}

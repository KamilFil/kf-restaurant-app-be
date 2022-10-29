import { Test, TestingModule } from '@nestjs/testing';
import { EmailSendingController } from './email-sending.controller';
import { EmailSendingService } from './email-sending.service';

describe('EmailSendingController', () => {
  let controller: EmailSendingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailSendingController],
      providers: [EmailSendingService],
    }).compile();

    controller = module.get<EmailSendingController>(EmailSendingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

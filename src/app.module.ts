import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { EmailSendingModule } from './email-sending/email-sending.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), EmailSendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

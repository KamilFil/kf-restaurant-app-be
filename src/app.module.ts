import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';


@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    UsersModule,
    AuthModule,
    ProductModule,
    ProductCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

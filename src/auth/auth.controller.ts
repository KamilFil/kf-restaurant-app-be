import { Controller, Post, UseGuards, Get, Res, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLogin } from '../../types/users/user-entity';
import { Response } from 'express';
import { UserObj } from '../decorators/user-object.decorator';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() req: UserLogin, @Res() res: Response): Promise<any> {
    return this.authService.login(req, res);
  }

  @Get('logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(@UserObj() user: User, @Res() res: Response) {
    return this.authService.logout(user, res);
  }
}

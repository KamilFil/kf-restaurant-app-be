import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/register')
  registerUser(@Body() userRegister: RegisterUserDto, @Res() res: Response) {
    return this.usersService.registerUser(userRegister, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.usersService.getOneUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUser);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}

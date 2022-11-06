import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/role.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from '../../types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/register')
  registerUser(@Body() userRegister: RegisterUserDto, @Res() res: Response) {
    return this.usersService.registerUser(userRegister, res);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Admin)
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

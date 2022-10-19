import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserLogin } from '../../types/users/user-entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/register')
  registerUser(@Body() userRegister: RegisterUserDto) {
    console.log(userRegister);
    return this.usersService.registerUser(userRegister);
  }

  @Post('/login')
  loginUser(@Body() userLogin: UserLogin) {
    //Stworzyć odpowiednią walidację.
    return this.usersService.loginUser(userLogin);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    //Stworzyć odpowiednią walidację.
    return this.usersService.getOneUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    //Stworzyć odpowiednią walidację.
    return this.usersService.updateUser(id, updateUser);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}

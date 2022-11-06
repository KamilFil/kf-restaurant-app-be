import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { hashPwd } from '../utils/hashPwd';
import { Role } from 'types';

@Injectable()
export class UsersService {
  async registerUser(
    userRegister: RegisterUserDto,
    res: Response,
  ): Promise<any> {
    const results = await User.findOne({
      where: { email: userRegister.email },
    });

    if (results) {
      throw new Error('Problem z użytkownikiem');
    }

    const user = new User();
    user.username = userRegister.username;
    user.password = hashPwd(userRegister.password);
    user.age = Number(userRegister.age);
    user.email = userRegister.email;
    user.role = Role.User;
    await user.save();
    const { username } = user;
    return res.json({ username });
  }

  async getAllUsers() {
    return await User.find();
  }

  async getOneUser(id: string): Promise<User | undefined> {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('Brak użytkownika o takim ID');
    }
    return user;
  }

  async updateUser(id: string, updateUser: UpdateUserDto) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('Brak użytkownika o podanym ID - Update');
    }
    await User.update(id, updateUser);

    return user.id;
  }

  async removeUser(id: string) {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw new Error('Brak użytkownika o podanym ID - Remove');
    }

    await User.delete({ id: id });

    return user.id;
  }
}

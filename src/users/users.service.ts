import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { configEnv } from '../config/config';
import { UserLogin } from '../../types/users/user-entity';

@Injectable()
export class UsersService {
  async registerUser(userRegister: RegisterUserDto) {
    const results = await User.findOne({
      where: { email: userRegister.email },
    });

    if (results) {
      throw new Error('Problem z użytkownikiem');
    }

    const hashPw = await bcrypt.hash(
      userRegister.password,
      configEnv.SALT_COUNT,
    );

    const user = new User();
    user.username = userRegister.username;
    user.password = hashPw;
    user.age = Number(userRegister.age);
    user.email = userRegister.email;
    await user.save();
    return user;
  }

  async loginUser(userLogin: UserLogin) {
    const user = await User.findOne({
      where: { email: userLogin.email },
    });

    const checkUser = await bcrypt.compare(userLogin.password, user.password);

    if (checkUser) {
      console.log('zalogowano');
      return user;
    } else {
      console.log('niezalogowny');
    }
  }

  async getAllUsers() {
    return await User.find();
  }

  async getOneUser(id: string): Promise<User> {
    return await User.findOne({ where: { id } });
  }

  async updateUser(id: string, updateUser: UpdateUserDto) {
    const user = await User.findOne({ where: { id } });

    await User.update(id, updateUser);

    return user.id;
  }

  async removeUser(id: string) {
    const user = await User.findOne({ where: { id } });
    await User.delete({ id: id });

    return user.id;
  }
}

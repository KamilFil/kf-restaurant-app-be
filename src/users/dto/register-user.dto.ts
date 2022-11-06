import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string | null;
  @IsNotEmpty()
  password: string;
  @IsInt()
  age: number;
}

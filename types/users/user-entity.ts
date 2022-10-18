export interface UserEntity {
  id: string;
  email: string;
  age: number;
  role: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

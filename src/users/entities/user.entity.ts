import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'types';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  @Column({
    default: Role.User,
  })
  role: Role;
}

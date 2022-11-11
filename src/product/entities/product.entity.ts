import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column({ default: '' })
  product_photo: string;

  @Column({ default: '' })
  product_photo_alt: string;

  @Column({ type: 'double' })
  product_price: number;

  @CreateDateColumn()
  createAt: Date;

  @Column({
    default: 0,
  })
  product_category_id: number;
}

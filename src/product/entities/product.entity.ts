import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  product_photo: string;

  @Column()
  product_photo_alt: string;

  @Column({ type: 'double' })
  price: number;

  @Column({ type: 'timestamptz' })
  createAt: Date;

  @Column()
  product_category_id: number;
}

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategory } from '../../product-category/entities/product-category.entity';

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

  @OneToOne((type) => ProductCategory)
  @JoinColumn()
  category: ProductCategory;
}

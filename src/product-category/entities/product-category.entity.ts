import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_category_id: number;

  @Column()
  product_category_name: string;

  @Column({ default: '' })
  product_category_desc: string;
}

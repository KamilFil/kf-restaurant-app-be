import { IsNumber, IsString } from 'class-validator';
import { ProductCategory } from '../../product-category/entities/product-category.entity';

export class CreateProductDto {
  @IsString()
  product_name: string;
  @IsString()
  product_photo: string;
  @IsString()
  product_photo_alt: string;
  @IsNumber()
  product_price: number;
  @IsNumber()
  category: ProductCategory;
}

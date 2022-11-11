import { IsString } from 'class-validator';

export class CreateProductCategoryDto {
  @IsString()
  product_category_name: string;
  @IsString()
  product_category_desc: string;
}

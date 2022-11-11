import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  product_name: string;
  @IsString()
  product_photo: string;
  @IsString()
  product_photo_alt: string;
  @IsNumber()
  product_price: number;
}

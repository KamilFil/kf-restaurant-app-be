import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(@Body() newProduct: CreateProductDto) {
    return this.productService.createProduct(newProduct);
  }

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getOne(+id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    return this.productService.updateProduct(+id, updateProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}

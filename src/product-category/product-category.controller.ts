import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  createCategoryProduct(
    @Body() createProductCategory: CreateProductCategoryDto,
  ) {
    return this.productCategoryService.createCategoryProduct(
      createProductCategory,
    );
  }

  @Get()
  getAll() {
    return this.productCategoryService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productCategoryService.getOne(+id);
  }

  @Patch(':id')
  updateCategoryProduct(
    @Param('id') id: string,
    @Body() updateProductCategory: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.updateCategoryProduct(
      +id,
      updateProductCategory,
    );
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productCategoryService.removeProduct(+id);
  }
}

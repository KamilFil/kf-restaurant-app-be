import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategory } from './entities/product-category.entity';

@Injectable()
export class ProductCategoryService {
  async createCategoryProduct(createProductCategory: CreateProductCategoryDto) {
    const newCategory = new ProductCategory();

    newCategory.name = createProductCategory.name;
    newCategory.desc = createProductCategory.desc;

    await newCategory.save();

    return newCategory.id;
  }

  async getAll() {
    return await ProductCategory.find();
  }

  async getOne(id: number) {
    return await ProductCategory.findOne({ where: { id: id } });
  }

  async updateCategoryProduct(
    id: number,
    updateProductCategory: UpdateProductCategoryDto,
  ) {
    const category = await ProductCategory.findOne({ where: { id: id } });

    if (!category) {
      throw new BadRequestException('Nie ma takiej kategorii');
    }

    await ProductCategory.update(id, updateProductCategory);
    return updateProductCategory.name;
  }

  async removeProduct(id: number) {
    const category = await ProductCategory.findOne({ where: { id: id } });

    if (!category) {
      throw new BadRequestException('Kategoria nie istnieje');
    }

    await ProductCategory.delete(id);
    return `Kategoria: ${category.name} - została usunięta`;
  }
}

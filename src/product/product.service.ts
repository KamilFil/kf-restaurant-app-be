import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  async createProduct(newProduct: CreateProductDto) {
    const product = new Product();
    product.product_name = newProduct.product_name;
    product.product_price = Number(newProduct.product_price);
    product.product_photo = newProduct.product_photo;
    product.product_photo_alt = newProduct.product_photo_alt;
    product.category = newProduct.category;

    await product.save();

    return product;
  }

  async getAll() {
    return await Product.find({
      relations: ['category'],
    });
  }

  async getOne(id: number) {
    return await Product.findOne({ where: { product_id: id } });
  }

  async updateProduct(id: number, updateProduct: UpdateProductDto) {
    const product = await Product.findOne({ where: { product_id: id } });
    if (!product) {
      throw new BadRequestException('Nie ma produktu o takim ID');
    }
    await Product.update(id, updateProduct);
    return product.product_id;
  }

  async deleteProduct(id: number) {
    const product = await Product.findOne({ where: { product_id: id } });
    if (!product) {
      throw new BadRequestException('Brak product o tym ID');
    }
    await Product.delete(id);
    return `Produkt o nazwie ${product.product_name} został usunięty`;
  }
}

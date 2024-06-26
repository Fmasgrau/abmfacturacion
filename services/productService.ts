import { CreateProductDTO, EditProductDTO } from "../entities/product";
import { RequestPaginatedParams } from "../entities/request";
import Product from "../models/product.model";

export const createProductService = async ({
  name,
  price,
}: CreateProductDTO) => {
  return await Product.create({ name, price });
};

export const getProductService = async (id: number) => {
  return await Product.findByPk(id);
};

export const getAllProductsService = async ({
  limit,
  offset,
}: RequestPaginatedParams) => {
  return await Product.findAndCountAll({ limit, offset });
};

export const updateProductService = async ({
  id,
  name,
  price,
}: EditProductDTO) => {
  const product = await Product.findByPk(id);
  if (!product) {
    return null;
  }
  await product.update({ name, price });
  return product;
};

export const deleteProductService = async (id: number) => {
  const product = await Product.findByPk(id);
  if (!product) {
    return null;
  }
  await product.destroy();
  return product;
};

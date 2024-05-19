export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CreateProductDTO {
  name: string;
  price: number;
}

export interface EditProductDTO {
  id: number;
  name?: string;
  price?: number;
}

import { Product } from "./dto";

export class ProductsService {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  // Create a new product
  async createClient(client: Product): Promise<void> {
    this.products.push(client);
  }

  // Read all products
  async getAllClients(): Promise<Product[]> {
    return this.products;
  }

  // Read a specific product by ID
  async getClientById(id: string): Promise<Product | undefined> {
    return this.products.find((client) => client.id === id);
  }

  // Update a product by ID
  async updateClientById(id: string, updatedClient: Product): Promise<boolean> {
    const index = this.products.findIndex((client) => client.id === id);

    if (index !== -1) {
      this.products[index] = updatedClient;
      return true;
    }

    return false;
  }

  // Delete a product by ID
  async deleteClientById(id: string): Promise<boolean> {
    const index = this.products.findIndex((client) => client.id === id);

    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}

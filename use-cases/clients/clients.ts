import { Client } from "./dto";

export class ClientsService {
  private clients: Client[];

  constructor() {
    this.clients = [];
  }

  // Create a new client
  async createClient(client: Client): Promise<void> {
    this.clients.push(client);
  }

  // Read all clients
  async getAllClients(): Promise<Client[]> {
    return this.clients;
  }

  // Read a specific client by ID
  async getClientById(id: string): Promise<Client | undefined> {
    return this.clients.find(client => client.id === id);
  }

  // Update a client by ID
  async updateClientById(id: string, updatedClient: Client): Promise<boolean> {
    const index = this.clients.findIndex(client => client.id === id);

    if (index !== -1) {
      this.clients[index] = updatedClient;
      return true;
    }

    return false;
  }

  // Delete a client by ID
  async deleteClientById(id: string): Promise<boolean> {
    const index = this.clients.findIndex(client => client.id === id);

    if (index !== -1) {
      this.clients.splice(index, 1);
      return true;
    }

    return false;
  }
}

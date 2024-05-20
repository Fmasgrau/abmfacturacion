import Client from "../models/clients.model";

export const createClientService = async (name: string, email: string) => {
  return await Client.create({ name, email });
};

export const getClientService = async (id: number) => {
  return await Client.findByPk(id);
};

export const getAllClientsService = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  return await Client.findAndCountAll({ limit, offset });
};

export const updateClientService = async (
  id: number,
  name: string,
  email: string,
) => {
  const client = await Client.findByPk(id);
  if (!client) {
    return null;
  }
  await client.update({ name, email });
  return client;
};

export const deleteClientService = async (id: number) => {
  const client = await Client.findByPk(id);
  if (!client) {
    return null;
  }
  await client.destroy();
  return client;
};

import { Request, Response } from "express";
import { deleteClient } from "../deleteClient";
import { deleteClientService } from "../../../services/clientService";

jest.mock("../../../services/clientService");

describe("deleteClient Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    req = {
      params: {
        id: "1",
      },
    };

    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    res = {
      status: statusMock,
    };

    (deleteClientService as jest.Mock).mockClear();
  });

  it("should delete a client and return 200 status", async () => {
    (deleteClientService as jest.Mock).mockResolvedValue(true);

    await deleteClient(req as Request, res as Response);

    expect(deleteClientService).toHaveBeenCalledWith(1);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ message: "Client deleted" });
  });

  it("should return 404 status if client not found", async () => {
    (deleteClientService as jest.Mock).mockResolvedValue(false);

    await deleteClient(req as Request, res as Response);

    expect(deleteClientService).toHaveBeenCalledWith(1);
    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Client not found" });
  });

  it("should return 500 status for internal server errors", async () => {
    const error = new Error("Internal Server Error");
    (deleteClientService as jest.Mock).mockRejectedValue(error);

    await deleteClient(req as Request, res as Response);

    expect(deleteClientService).toHaveBeenCalledWith(1);
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});

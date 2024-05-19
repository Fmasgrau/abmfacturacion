import { Request, Response } from "express";
import { updateClient } from "../updateClients";
import { updateClientService } from "../../../services/clientService";

jest.mock("../../../services/clientService");

describe("updateClient Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;
  let consoleErrorMock: jest.SpyInstance;

  beforeEach(() => {
    req = {
      params: {
        id: "1",
      },
      body: {
        name: "Updated Client",
        email: "updated@example.com",
      },
    };

    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    res = {
      status: statusMock,
    };

    (updateClientService as jest.Mock).mockClear();

    // Mock console.error
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  it("should update a client and return 200 status", async () => {
    const mockClient = { id: 1, name: "Updated Client", email: "updated@example.com" };
    (updateClientService as jest.Mock).mockResolvedValue(mockClient);

    await updateClient(req as Request, res as Response);

    expect(updateClientService).toHaveBeenCalledWith(1, "Updated Client", "updated@example.com");
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockClient);
  });

  it("should return 404 status if client not found", async () => {
    (updateClientService as jest.Mock).mockResolvedValue(null);

    await updateClient(req as Request, res as Response);

    expect(updateClientService).toHaveBeenCalledWith(1, "Updated Client", "updated@example.com");
    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Client not found" });
  });

  it("should return 400 status if email already exists", async () => {
    const error = new Error("Email already exists");
    error.name = "SequelizeUniqueConstraintError";
    (updateClientService as jest.Mock).mockRejectedValue(error);

    await updateClient(req as Request, res as Response);

    expect(updateClientService).toHaveBeenCalledWith(1, "Updated Client", "updated@example.com");
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Email already exists" });
  });

  it("should return 400 status for validation errors", async () => {
    const error = new Error("Validation error");
    error.name = "SequelizeValidationError";
    (updateClientService as jest.Mock).mockRejectedValue(error);

    await updateClient(req as Request, res as Response);

    expect(updateClientService).toHaveBeenCalledWith(1, "Updated Client", "updated@example.com");
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Validation error" });
  });

  it("should return 500 status for internal server errors", async () => {
    const error = new Error("Internal Server Error");
    (updateClientService as jest.Mock).mockRejectedValue(error);

    await updateClient(req as Request, res as Response);

    expect(updateClientService).toHaveBeenCalledWith(1, "Updated Client", "updated@example.com");
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});

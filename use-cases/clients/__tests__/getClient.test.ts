import { Request, Response } from "express";
import { getClient } from "../getClient";
import { getClientService } from "../../../services/clientService";

jest.mock("../../../services/clientService");

describe("getClient Controller", () => {
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
    };

    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    res = {
      status: statusMock,
    };

    (getClientService as jest.Mock).mockClear();

    // Mock console.error
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  it("should return a client and 200 status", async () => {
    const mockClient = { id: 1, name: "Test Client", email: "test@example.com" };
    (getClientService as jest.Mock).mockResolvedValue(mockClient);

    await getClient(req as Request, res as Response);

    expect(getClientService).toHaveBeenCalledWith(1);
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockClient);
  });

  it("should return 404 status if client not found", async () => {
    (getClientService as jest.Mock).mockResolvedValue(null);

    await getClient(req as Request, res as Response);

    expect(getClientService).toHaveBeenCalledWith(1);
    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Client not found" });
  });

  it("should return 500 status for internal server errors", async () => {
    const error = new Error("Internal Server Error");
    (getClientService as jest.Mock).mockRejectedValue(error);

    await getClient(req as Request, res as Response);

    expect(getClientService).toHaveBeenCalledWith(1);
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});

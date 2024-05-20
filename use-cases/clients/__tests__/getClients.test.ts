import { Request, Response } from "express";
import { getClients } from "../getClients";
import { getAllClientsService } from "../../../services/clientService";

jest.mock("../../../services/clientService");

describe("getClients Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;
  let consoleErrorMock: jest.SpyInstance;

  beforeEach(() => {
    req = {
      query: {
        page: "1",
        limit: "10",
      },
    };

    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    res = {
      status: statusMock,
    };

    (getAllClientsService as jest.Mock).mockClear();

    // Mock console.error
    consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  it("should return a list of clients and 200 status", async () => {
    const mockClients = {
      count: 2,
      rows: [
        { id: 1, name: 'Client One', email: 'one@example.com' },
        { id: 2, name: 'Client Two', email: 'two@example.com' },
      ],
    };
    const page = 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    (getAllClientsService as jest.Mock).mockResolvedValue(mockClients);

    await getClients(req as Request, res as Response);

    expect(getAllClientsService).toHaveBeenCalledWith({ limit, offset });
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      totalItems: 2,
      totalPages: 1,
      currentPage: 1,
      results: mockClients.rows,
    });
  });

  it("should return 500 status for internal server errors", async () => {
    const error = new Error("Internal Server Error");
    (getAllClientsService as jest.Mock).mockRejectedValue(error);

    await getClients(req as Request, res as Response);

    expect(getAllClientsService).toHaveBeenCalled();
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});

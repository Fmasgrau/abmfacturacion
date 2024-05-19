import { Request, Response } from "express";
import { createClient } from "../createClient";
import { createClientService } from "../../../services/clientService";

jest.mock("../../../services/clientService");

describe("createClient Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    req = {
      body: {
        name: "Test Client",
        email: "test@example.com",
      },
    };

    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    res = {
      status: statusMock,
    };

    (createClientService as jest.Mock).mockClear();
  });

  it("should create a client and return 201 status", async () => {
    const mockClient = {
      id: 1,
      name: "Test Client",
      email: "test@example.com",
    };
    (createClientService as jest.Mock).mockResolvedValue(mockClient);

    await createClient(req as Request, res as Response);

    expect(createClientService).toHaveBeenCalledWith(
      "Test Client",
      "test@example.com",
    );
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith(mockClient);
  });

  it("should return 400 status if email already exists", async () => {
    const error = new Error("Email already exists");
    error.name = "SequelizeUniqueConstraintError";
    (createClientService as jest.Mock).mockRejectedValue(error);

    await createClient(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: error.message,
      details: "Email already exists",
    });
  });

  it("should return 400 status for validation errors", async () => {
    const error = new Error("Validation error");
    error.name = "SequelizeValidationError";
    (createClientService as jest.Mock).mockRejectedValue(error);

    await createClient(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      error: error.message,
      details: "Validation error",
    });
  });

  it("should return 500 status for internal server errors", async () => {
    const error = new Error("Internal Server Error");
    (createClientService as jest.Mock).mockRejectedValue(error);

    await createClient(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      error: error.message,
      details: "Internal Server Error",
    });
  });
});

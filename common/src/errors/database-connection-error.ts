import { CustomError } from "./custom-error";
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to databse";
  constructor() {
    super("error connect db");
  }
  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}

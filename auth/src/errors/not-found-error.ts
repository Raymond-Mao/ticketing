import { CustomError } from ".";
export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("not found");
  }
  serializeErrors() {
    return [
      {
        message: "not found",
      },
    ];
  }
}

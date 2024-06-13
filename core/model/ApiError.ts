interface ErrorResponse {
  status: number;
  message: string;
}

export class ApiError extends Error {
  status: number;
  data?: any; // Optional additional data

  constructor(status: number, message: string, data?: any) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.message = message;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON(): ErrorResponse {
    return {
      status: this.status,
      message: this.message,
    };
  }
}
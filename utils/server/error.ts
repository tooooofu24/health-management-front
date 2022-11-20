export class APIError extends Error {
  constructor(public message: string, public code: number) {
    super(message);
    this.name = new.target.name;
    this.message = message;
    this.code = code;
  }
}

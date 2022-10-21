export type APIErrorResponse = {
  code: number;
  error: string;
  message: string;
  detail: {};
};

export const unknownError: APIErrorResponse = {
  code: 500,
  error: "Unknow Error",
  message: "不明なエラー",
  detail: {},
};

export class APIError extends Error {
  constructor(public response: APIErrorResponse, e?: string) {
    super(e);
    this.name = new.target.name;
    this.response = response;
  }
}

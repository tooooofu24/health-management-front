type Response = {
  message: string;
  data?: object | any[];
};
export const response = (message: string, data?: object | any[]): Response => {
  return {
    message,
    data,
  };
};

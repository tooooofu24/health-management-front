import { APIError } from "../types/APIErrorResponse";
import { getBearerToken } from "./bearer";

const createURL = (uri: string, query?: {}) => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL +
    uri +
    "?" +
    new URLSearchParams(query).toString()
  );
};

const headers = (): HeadersInit => {
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getBearerToken(),
  };
};

export const getRequest = async (uri: string, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "GET",
    headers: headers(),
  });
  const json = await res.json();
  if (json.error) {
    throw new APIError(json);
  }
  return json;
};

export const postRequest = async (uri: string, body: {}, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers(),
  });
  const json = await res.json();
  if (json.error) {
    throw new APIError(json);
  }
  return json;
};

export const deleteRequest = async (uri: string, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "DELETE",
    headers: headers(),
  });
  // 失敗時
  if (!res.ok) {
    const json = await res.json();
    if (json?.error) {
      throw new APIError(json);
    }
  }
};

import { getAuth } from "firebase/auth";
import { APIError } from "../types/APIErrorResponse";

const createURL = (uri: string, query?: {}) => {
  const queryString = query ? "?" + new URLSearchParams(query).toString() : "";
  return process.env.NEXT_PUBLIC_API_BASE_URL + uri + queryString;
};

const headers = async (): Promise<HeadersInit> => {
  const user = getAuth().currentUser;
  const bearer = await user?.getIdToken(true);
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + bearer,
  };
};

export const getRequest = async (uri: string, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "GET",
    headers: await headers(),
  });
  const json = await res.json();
  if (json.error) {
    throw new APIError(json, json.message);
  }
  return json;
};

export const postRequest = async (uri: string, body: {}, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: await headers(),
  });
  const json = await res.json();
  if (json.error) {
    throw new APIError(json, json.message);
  }
  return json;
};

export const deleteRequest = async (uri: string, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "DELETE",
    headers: await headers(),
  });
  const json = await res.json();
  if (json?.error) {
    throw new APIError(json, json.message);
  }
};

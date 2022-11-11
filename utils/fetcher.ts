import { APIError } from "../types/APIErrorResponse";
import { createURL, headers } from "./apiClient";

export const fetcher = async (uri: string, query?: {}) => {
  const url = createURL(uri, query);
  const res = await fetch(url, {
    method: "GET",
    headers: await headers(),
  });

  if (!res.ok) {
    const json = await res.json();
    throw new APIError(json, json.message);
  }

  return res.json();
};

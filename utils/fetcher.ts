import { headers } from "./apiClient";

export const fetcher = async (uri: string, query?: {}) => {
  const queryString = query ? "?" + new URLSearchParams(query).toString() : "";
  const res = await fetch(uri + queryString, {
    method: "GET",
    headers: await headers(),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

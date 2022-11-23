import { headers } from "./apiClient";

export const fetcher = async (uri: string, query?: {}) => {
  const res = await fetch(uri, {
    method: "GET",
    headers: await headers(),
  });

  if (!res.ok) {
    throw new Error("APIの取得に失敗しました");
  }

  return res.json();
};

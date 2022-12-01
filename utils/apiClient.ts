import { getAuth } from "firebase/auth";

export const headers = async (): Promise<HeadersInit> => {
  const user = getAuth().currentUser;
  const bearer = await user?.getIdToken();
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + bearer,
  };
};

export const getRequest = async (uri: string, query?: {}) => {
  const res = await fetch(uri, {
    method: "GET",
    headers: await headers(),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const postRequest = async (uri: string, body: {}, query?: {}) => {
  const res = await fetch(uri, {
    method: "POST",
    body: JSON.stringify(body),
    headers: await headers(),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const putRequest = async (uri: string, body: {}, query?: {}) => {
  const res = await fetch(uri, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: await headers(),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const deleteRequest = async (uri: string) => {
  const res = await fetch(uri, {
    method: "DELETE",
    headers: await headers(),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
};

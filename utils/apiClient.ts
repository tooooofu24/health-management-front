import { getAuth } from "firebase/auth";

export const headers = async (): Promise<HeadersInit> => {
  const user = getAuth().currentUser;
  const bearer = await user?.getIdToken();
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + bearer,
  };
};

// export const getRequest = async (uri: string, query?: {}) => {
//   const url = createURL(uri, query);
//   const res = await fetch(url, {
//     method: "GET",
//     headers: await headers(),
//   });
//   const json = await res.json();
//   if (json.error) {
//     throw new APIError(json, json.displayMessage);
//   }
//   return json;
// };

export const postRequest = async (uri: string, body: {}, query?: {}) => {
  const res = await fetch(uri, {
    method: "POST",
    body: JSON.stringify(body),
    headers: await headers(),
  });
  const json = await res.json();
  if (!res.ok) {
    console.log(json);
    throw new Error(json.message);
  }
  console.log(json);

  return json;
};

// export const deleteRequest = async (uri: string, query?: {}) => {
//   const url = createURL(uri, query);
//   const res = await fetch(url, {
//     method: "DELETE",
//     headers: await headers(),
//   });
//   const json = await res.json();
//   if (json?.error) {
//     throw new APIError(json, json.displayMessage);
//   }
// };

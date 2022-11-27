import { postRequest } from "../utils/apiClient";

export const usePostSlackMessage = () => {
  const postSlackMessage = async (channel: string, text: string) => {
    const url = "https://slack.com/api/chat.postMessage";
    const token = process.env.NEXT_PUBLIC_SLACK_TOKEN;
    const headers: HeadersInit = {
      "content-type": "application/x-www-form-urlencoded",
    };
    const res = await fetch(url, {
      method: "POST",
      body: `token=${token}&channel=${channel}&text=${text}`,
      headers,
    });
    const json = await res.json();
    if (!json.ok) {
      throw new Error(json.error);
    }
    return json;
  };
  return { postSlackMessage };
};

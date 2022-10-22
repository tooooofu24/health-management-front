import { postRequest } from "../utils/apiClient";

export const useCheckUser = () => {
  const checkUser = async () => {
    const response = await postRequest("/users/check", {});
  };
  return { checkUser };
};

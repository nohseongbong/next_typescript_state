import { UserListResType } from "@/pages/api/userList";
import { axiosInstance } from "../config";

export const getUsers = async () => {
  const { data } = await axiosInstance.get<UserListResType>("/userList");

  return data;
};

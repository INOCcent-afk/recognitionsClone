import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data;
};

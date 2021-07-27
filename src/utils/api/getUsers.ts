import axios from "axios";

// export const getUsers = async () => {
//   const response = await axios.get("https://dummyapi.io/data/api/user", {
//     headers: { "app-id": `${process.env.NEXT_PUBLIC_USERS}` },
//   });
//   return response.data;
// };
export const getUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data;
};

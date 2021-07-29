import axios from "axios";

export const getCards = async () => {
  const response = await axios.get(
    `http://localhost:5000/cards`
  );
  return response.data;
};

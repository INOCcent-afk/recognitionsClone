import axios from "axios";

export const createCard = async (newPost: any) => {
  const response = await axios.post("http://localhost:5000/cards", newPost);
};

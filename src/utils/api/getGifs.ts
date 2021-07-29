import axios from "axios";

export const getGifs = async () => {
  const response = await axios.get(
    `https://api.giphy.com/v1/stickers/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=200`
  );
  return response.data;
};

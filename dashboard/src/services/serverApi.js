import axios from "axios";

export const serverUrl = "https://mission-superhero.onrender.com/api";

const serverApi = async ({ reqMethod, data, url }) => {
  try {
    return await axios(url, {
      data,
      method: reqMethod,
    });
  } catch (error) {
    return error;
  }
};

export default serverApi;

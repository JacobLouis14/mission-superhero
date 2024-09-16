import axios from "axios";

// server URL
export const ServerUrl = "https://mission-superhero.onrender.com/api";

export const serverApi = async ({ reqMethod, data, url }) => {
  try {
    const res = await axios(url, {
      method: reqMethod,
      data: data,
    });
    return res;
  } catch (error) {
    return error;
  }
};

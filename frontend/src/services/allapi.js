import { serverApi, ServerUrl } from "./serverapi";

// create grivence
export const createGrivenceApi = async ({ data }) => {
  try {
    return await serverApi({
      reqMethod: "POST",
      url: `${ServerUrl}/grievance/create-grievance`,
      data,
    });
  } catch (error) {
    return error;
  }
};

import serverApi, { serverUrl } from "./serverApi";

// get grievance
export const getGrievance = async ({ currentPage, tokenToSend }) => {
  try {
    return await serverApi({
      reqMethod: "GET",
      url: `${serverUrl}/grievance/get-all-grievance/${tokenToSend}?dataPerPage=${10}&currentPage=${currentPage}`,
    });
  } catch (error) {
    return error;
  }
};

// search api
export const greivanceSearchApiHandler = async ({
  searchValue,
  tokenToSend,
}) => {
  try {
    return await serverApi({
      reqMethod: "GET",
      url: `${serverUrl}/grievance/get-searched-grievance/${tokenToSend}?searchedValue=${searchValue}`,
    });
  } catch (error) {
    return error;
  }
};

// filter api
export const grievanceFilterApiHandler = async ({
  filterValue,
  currentPage,
  tokenToSend,
}) => {
  try {
    return await serverApi({
      reqMethod: "GET",
      url: `${serverUrl}/grievance/get-filtered-grievance/${tokenToSend}?filterValue=${filterValue}&dataPerPage=${10}&currentPage=${currentPage}`,
    });
  } catch (error) {
    return error;
  }
};

// login api
export const loginApiHandler = async (logindata) => {
  try {
    return await serverApi({
      reqMethod: "POST",
      data: logindata,
      url: `${serverUrl}/auth/login`,
    });
  } catch (error) {
    return error;
  }
};

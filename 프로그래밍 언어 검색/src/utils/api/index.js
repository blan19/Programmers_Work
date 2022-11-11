import constants from "../../constants/index.js";

export default {
  async getSearchResult(query) {
    if (!query) return;
    try {
      const response = await fetch(
        `${constants.BASE_URL}${constants.API_ENDPOINT.LANGUAGES}?keyword=${query}`
      );
      if (!response.ok) throw new Error("invalid api");
      const searchResult = await response.json();
      return searchResult;
    } catch (error) {
      throw new Error(error);
    }
  },
};

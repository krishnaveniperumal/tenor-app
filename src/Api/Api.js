import axios from "axios";

export const featuredGifApi = async (nextData, limit) => {
  try {
    const data = await axios.get(
      `https://tenor.googleapis.com/v2/featured`, {
        params: {
          key: "AIzaSyBnlmyaaP0kWZP-zFEy_k8q2hzw0Gh_iC0",
          limit: limit,
          ...(nextData && {
            pos: nextData,
          }),
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const trendingGifApi = async () => {
  try {
    const data = await axios.get(
      "https://tenor.googleapis.com/v2/categories?key=AIzaSyBnlmyaaP0kWZP-zFEy_k8q2hzw0Gh_iC0&type=trending"
    );
    return data.data.tags;
  } catch (error) {
    console.log("error", error);
  }
};

export const searchApi = async (nextData, limit, val) => {
  try {
    const response = await axios.get(
      `https://tenor.googleapis.com/v2/search?q=${val}`,
      {
        params: {
          q: val,
          key: "AIzaSyBnlmyaaP0kWZP-zFEy_k8q2hzw0Gh_iC0",
          limit: limit,
          ...(nextData && {
            pos: nextData,
          }),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

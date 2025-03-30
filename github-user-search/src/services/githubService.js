import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchAdvancedUserSearch = async (query, location, minRepos) => {
  try {
    const searchQuery = `q=${query}${location ? `+location:${location}` : ""}${
      minRepos ? `+repos:>${minRepos}` : ""
    }`;
    const response = await axios.get(
      `https://api.github.com/search/users?${searchQuery}`
    );
    return response.data.items;
  } catch (error) {
    return [];
  }
};

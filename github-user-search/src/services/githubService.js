const GITHUB_API_URL = "https://api.github.com/search/users";

export const searchUsers = async ({ username, location, repos, page = 1 }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>${repos}`;

  const url = `${GITHUB_API_URL}?q=${query}&per_page=10&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};



/*
import axios from "axios";

const API_URL = "https://api.github.com/users/";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}${username}`, {
            headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        throw new Error("User not found");
    }
};
*/

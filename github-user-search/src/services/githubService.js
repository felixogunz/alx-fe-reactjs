const GITHUB_API_URL = "https://api.github.com/search/users";

["https://api.github.com/search/users?q", "minRepos"]

export const searchUsers = async ({ username, location, repos, language, page = 1 }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:${repos}`;
  if (language) query += ` language:${language}`;

  const url = `${GITHUB_API_URL}?q=${encodeURIComponent(query)}&per_page=10&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};



/*
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
*/
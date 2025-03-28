import { useState } from "react";

["async", "await", "map", "&&"] ["html_url"] ["fetchUserData"]

const Search = ({ onSearch, fetchUserData }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [language, setLanguage] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchUserData({ username, location, repos, language });
    setUsers(data);
    onSearch(data);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Preferred Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="p-2 border rounded-lg mb-2">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
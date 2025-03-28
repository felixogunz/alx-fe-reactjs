import { useState } from "react";

["async", "await", "map", "&&"]
const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [language, setLanguage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ username, location, repos, language });
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
    </div>
  );
};

export default Search;

/*
import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = async (params) => {
    setLoading(true);
    setError("");
    setPage(1);
    setSearchParams(params);

    try {
      const result = await searchUsers({ ...params, page: 1 });

      if (result?.items?.length) {
        setUsers(result.items);
      } else {
        setUsers([]);
        setError("No users found");
      }
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!searchParams) return;
    
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const result = await searchUsers({ ...searchParams, page: nextPage });

      if (result?.items?.length) {
        setUsers((prevUsers) => [...prevUsers, ...result.items]);
      }
    } catch (err) {
      setError("Failed to load more users");
    }
  };

  return (
    <div className="p-6">
      <Search onSearch={handleSearch} />
      
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="text-center font-bold">{user.login}</h3>
            <p className="text-sm text-gray-600 text-center">
              {user.location || "No location provided"}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="block mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default App;
*/


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



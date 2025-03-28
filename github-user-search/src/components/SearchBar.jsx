import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleSearch = () => {
        if (username.trim() !== "") {
            onSearch(username);
        }
    };

    return (
        <div className="flex items-center gap-2 p-4">
            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-md w-full"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;

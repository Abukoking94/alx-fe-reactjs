import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    const data = await fetchUserData(username);
    if (data) {
      setUserData(data);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="mt-4">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          className="p-2 mr-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">Looks like we cant find the user</p>
      )}

      {userData && (
        <div className="p-4 mt-4 border rounded">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 mx-auto rounded-full"
          />
          <h2 className="text-lg font-semibold">
            {userData.name || userData.login}
          </h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

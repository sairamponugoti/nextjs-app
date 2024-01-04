"use client";
import { useState } from "react";

const Search = ({ getSearchResults }) => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/courses/search?query=${searchText}`);
    const courses = await response.json();
    getSearchResults(courses);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search Courses..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

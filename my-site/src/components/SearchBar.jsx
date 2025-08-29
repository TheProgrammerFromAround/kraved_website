import { useState } from "react";
import "./SearchBar.css";   // import CSS file

export default function SearchBar() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="searchbar-wrapper">
      <div
        className={`searchbar ${hovered ? "expanded" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        {/* Input field */}
        <input
          type="text"
          placeholder="Search..."
          className={`search-input ${hovered ? "show" : ""}`}
        />
      </div>
    </div>
  );
}

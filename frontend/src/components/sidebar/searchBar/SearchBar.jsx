import React, { useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";

import useGetConversations from "../../../hooks/useGetConversations";
import useSearch from "../../../zustand/useSearch";

const SearchBar = () => {
  const [localSearch, setLocalSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const { setSearch, setMatchingConversations } = useSearch();
  const { conversations } = useGetConversations();

  const handleClearInput = () => {
    setLocalSearch("");
    inputRef.current.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (localSearch === "") {
      setIsFocused(false);
    }
  };

  const handleBlurClear = () => {
    setLocalSearch("");
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setLocalSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(localSearch);
    if (localSearch.length < 0) {
      setMatchingConversations([]);
      if (localSearch.length > 0) {
        toast.error("Search term must be at least 3 characters long");
      }
      return;
    }

    const matchingConversations = conversations.filter((c) =>
      c.fullName.toLowerCase().includes(localSearch.toLowerCase())
    );

    setMatchingConversations(matchingConversations);
  }, [localSearch, conversations, setMatchingConversations, setSearch]);

  return (
    <div className="searchbar">
      <div>
        <input
          type="text"
          placeholder={isFocused ? "" : "Search"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={localSearch}
          onChange={handleChange}
          className={isFocused ? "border" : ""}
          ref={inputRef}
        />

        <i className={`searchbackIcon ${isFocused ? "none" : ""}`}>
          <IoMdSearch />
        </i>
        <i className={`searchbackIcon backIcon ${isFocused ? "show" : "none"}`}>
          <IoArrowBackOutline onClick={handleBlurClear} />
        </i>

        <i className={`clearIcon ${localSearch ? "show" : "none"}`}>
          <MdClear onClick={handleClearInput} />
        </i>
      </div>
    </div>
  );
};

export default SearchBar;

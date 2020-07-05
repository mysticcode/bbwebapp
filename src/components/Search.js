import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [searchText, setSearchText] = useState("");
  const onChange = (q) => {
    setSearchText(q);
    getQuery(q);
  };
  return (
    <section>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          autoFocus
          value={searchText}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </form>
    </section>
  );
};
export default Search;

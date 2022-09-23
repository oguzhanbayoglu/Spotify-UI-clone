import React from "react";

import searchBlack from "img/searchBlack.svg";

function NavSearch() {
  return (
    <label className="nav-search">
      <img src={searchBlack} alt="" />
      <input
        autoFocus={true}
        type="text"
        className="nav-search-input"
        placeholder="What do you want to listen to?"
      />
    </label>
  );
}

export default NavSearch;

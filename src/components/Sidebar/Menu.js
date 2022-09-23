import React from "react";
import home from "img/home.svg";
import search from "img/search.svg";
import library from "img/library2.svg";
import liked from "img/liked.svg";
import create from "img/create.svg";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav className="sb-menu">
        <NavLink className="sb-menu-item" to="/">
          <img className="sb-menu-logo" src={home} alt="home" />
          Home
        </NavLink>

        <NavLink className="sb-menu-item" to="/search">
          <img className="sb-menu-logo" src={search} alt="search" />
          Search
        </NavLink>

        <NavLink className="sb-menu-item" to="/library">
          <img className="sb-menu-logo" src={library} alt="library" />
          Your Library
        </NavLink>
      </nav>
      <nav className="list-menu">
        <NavLink className="sb-menu-item" to="/create">
          <img className="sb-menu-logo create" src={create} alt="library" />
          Create Playlist
        </NavLink>
        <NavLink className="sb-menu-item" to="/liked">
          <img className="sb-menu-logo liked" src={liked} alt="library" />
          Liked Songs
        </NavLink>
        <div className="hr"></div>
      </nav>
    </>
  );
}

export default Menu;

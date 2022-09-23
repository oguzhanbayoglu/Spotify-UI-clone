import React from "react";
import back from "img/arrow_backnew.svg";
import forward from "img/arrow_forward.svg";
import { useNavigate } from "react-router-dom";
import Auth from "./navbar/Auth";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import NavSearch from "./navbar/NavSearch";
import LibraryTab from "./navbar/LibraryTab";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navigation">
        <button onClick={() => navigate(-1)} className="nav-btn">
          <img className="nav-btn-back" src={back} alt="back" />
        </button>
        <button onClick={() => navigate(1)} className="nav-btn">
          <img className="nav-btn-forward" src={forward} alt="forward" />
        </button>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/search" element={<NavSearch />} />
          <Route path="/library" element={<LibraryTab />} />
        </Routes>
      </div>

      <Auth />
    </div>
  );
}

export default Navbar;

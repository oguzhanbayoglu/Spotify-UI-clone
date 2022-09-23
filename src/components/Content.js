import React from "react";
import Navbar from "components/Navbar";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "views/Home";
import Library from "views/Library";
import Search from "views/Search";
import Create from "views/Create";
import Liked from "views/Liked";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Content() {
  const [animationParent] = useAutoAnimate();
  return (
    <main className="content">
      <Navbar />
      <div className="sub-content" ref={animationParent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/create" element={<Create />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;

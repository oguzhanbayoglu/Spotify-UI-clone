import React from "react";
import logo from "img/logo.svg";
import collapse from "img/collapse.svg";
import Menu from "./Sidebar/Menu";
import { NavLink } from "react-router-dom";
import Playlists from "./Sidebar/Playlists";
import download from "img/download.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/player";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.player.sidebar);
  const current = useSelector((state) => state.player.current);

  const [animationParent] = useAutoAnimate();

  return (
    <div className="sidebar" ref={animationParent}>
      <NavLink to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <Menu />
      <div className="playlist-container">
        <Playlists />
        <a className="install" href="">
          <img src={download} alt="download" className="download" />
          Install App
        </a>
      </div>
      {sidebar && (
        <div className="sidebar-cover">
          <div className="sidebar-subcover">
            <img className="sidebar-cover-img" src={current.img} alt="" />
            <button
              onClick={() => dispatch(setSidebar(false))}
              className="sidebar-cover-btn"
            >
              <img className="collapse" src={collapse} alt="collapse" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

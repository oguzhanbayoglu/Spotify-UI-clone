import React from "react";
import { NavLink } from "react-router-dom";
import play from "img/play.svg";
import pause2 from "img/pause2.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "stores/player";

function CardItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <NavLink key={item.id} to="/" className="card" onClick={updateCurrent}>
      <div className="card-media-container">
        <img
          className={`card-media ${item.type === "playlist" ? "" : "circle"}`}
          src={item.img}
          alt="cover"
        />
        <button className="card-media-play">
          <img
            className="card-media-play-svg"
            src={current?.id === item.id && playing ? pause2 : play}
            alt=""
          />
        </button>
      </div>
      <h4 className="card-title">{item.title}</h4>
      <p className="card-description">{item.description}</p>
    </NavLink>
  );
}

export default CardItem;

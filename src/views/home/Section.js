import React from "react";
import { NavLink } from "react-router-dom";
import play from "img/play.svg";
import CardItem from "./CardItem";

function Section({ title, more = false, items }) {
  return (
    <section>
      <div className="section-title">
        <NavLink to={more}>
          <h3 className="title">{title}</h3>
        </NavLink>
        {more && <NavLink to={more}>SEE ALL</NavLink>}
      </div>
      <div className="card-container">
        {items.map((item) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Section;

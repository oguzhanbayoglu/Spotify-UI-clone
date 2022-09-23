import React from "react";

function FavCategory({ title, color, img }) {
  return (
    <div className="fav-category">
      <div
        className="fav-category-item"
        style={{
          backgroundColor: color,
        }}
      >
        <h3 className="fav-category-title">{title}</h3>
        <div className="category-img-cont">
          <img className="fav-category-img" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default FavCategory;

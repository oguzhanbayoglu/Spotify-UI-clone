import React from "react";

function Category({ title, color, img }) {
  return (
    <div className="category">
      <div
        className="category-item"
        style={{
          backgroundColor: color,
        }}
      >
        <h3 className="category-title">{title}</h3>
        <div className="category-img-cont">
          <img className="category-img" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Category;

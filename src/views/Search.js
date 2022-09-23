import React, { useEffect, useRef, useState } from "react";
import categories from "./search/categories";
import favoriteCategories from "./search/favorite-categories";
import Category from "./search/Category";
import FavCategory from "./search/FavCategory";
import ScrollContainer from "react-indiana-drag-scroll";
import back from "img/arrow_backnew.svg";
import forward from "img/arrow_forward.svg";

function Search() {
  const favoriteRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoriteRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoriteRef.current.scrollLeft + favoriteRef.current.offsetWidth ===
          favoriteRef.current.scrollWidth;

        const isStart = favoriteRef.current.scrollLeft === 0;
        setPrev(!isStart);
        setNext(!isEnd);
      };

      scrollHandle();

      favoriteRef.current.addEventListener("scroll", scrollHandle);

      return () => {
        favoriteRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoriteRef]);

  function slideNext() {
    favoriteRef.current.scrollLeft += 900;
  }
  function slidePrev() {
    favoriteRef.current.scrollLeft -= 900;
  }

  return (
    <div className="search">
      <h3>Your Top Genres</h3>
      <div className="fav-categories">
        {prev && (
          <button className="fav-btn prev" onClick={slidePrev}>
            <img className="nav-btn-back" src={back} alt="back" />
          </button>
        )}
        <ScrollContainer
          innerRef={favoriteRef}
          className="fav-category-container"
        >
          {favoriteCategories.map((category) => (
            <FavCategory
              title={category.title}
              color={category.color}
              img={category.cover}
            />
          ))}
        </ScrollContainer>
        {next && (
          <button className="fav-btn next" onClick={slideNext}>
            <img className="nav-btn-forward" src={forward} alt="forward" />
          </button>
        )}
      </div>
      <div className="all-categories">
        <h3>Browse All</h3>
        <div className="category-container">
          {categories.map((category) => (
            <Category
              title={category.title}
              color={category.color}
              img={category.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

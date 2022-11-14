import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

function Blog(props) {
  const handleToggleFavorites = () => {
    const changeCurrentObject = {
      ...props.item,
      isFavorite: !props.item.isFavorite,
    };
    props.setItems((prevItems) => {
      const itemsWithouCurrent = prevItems.map((item) => {
        if (item.id === props.item.id) {
          return changeCurrentObject;
        }
        return item;
      });

      return itemsWithouCurrent;
    });
  };

  const iconStyle = props.item.isFavorite
    ? { fill: "#ff0000", fontSize: "1.5em" }
    : { fontSize: "1.5em" };

  return (
    <article className="article">
      <img className="images" src={props.item.img} alt="" />
      <div className="section">
        <h2>{props.item.title} </h2>
        <AiOutlineStar style={iconStyle} onClick={handleToggleFavorites} />{" "}
      </div>

      <p>{props.item.text}</p>
    </article>
  );
}

export default Blog;

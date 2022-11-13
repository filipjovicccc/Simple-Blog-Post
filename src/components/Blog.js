import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function Blog(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.text}</p>

      <p>
        <AiOutlineStar />
      </p>
      <div>
        <img src={props.img} alt="" />
      </div>
    </article>
  );
}

export default Blog;

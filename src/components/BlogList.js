import React from "react";
import Blog from "./Blog";

const BlogList = (props) => {
  return (
    <div className="blog-list">
      {props.items.map((item) => {
        return <Blog key={item.id} item={item} setItems={props.setItems} />;
      })}
    </div>
  );
};
{
}

export default BlogList;

import React from "react";
import Blog from "./Blog";

const BlogList = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <>
            <Blog
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              icons={item.icons}
              img={item.img}
            />
          </>
        );
      })}
    </div>
  );
};

export default BlogList;
{
}

import React from "react";
import "./NewBlog.css";
import Modal from "./UI/Modal";
import { useRef } from "react";

function NewBlog(props) {
  const titleRef = useRef();
  const textRef = useRef();
  //   const imgUrl = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const referentTitle = titleRef;
    const referentText = textRef;
    // const referentImg = imgUrl;
    const blogData = {
      title: referentTitle.current.value,
      text: referentText.current.value,
      //   img: referentImg.current.value,
    };
    props.onAdd(blogData);
  };

  return (
    <Modal>
      <form className="form-control" onSubmit={submitHandler}>
        <label>Enter title name</label>
        <input ref={titleRef} type="text" name="text" />
        <label>Enter text name</label>
        <input ref={textRef} type="text" />
        <label>Enter img url</label>
        <input
          // ref={imgUrl}
          type="url"
        />
        <button>Submit</button>
      </form>
    </Modal>
  );
}

export default NewBlog;

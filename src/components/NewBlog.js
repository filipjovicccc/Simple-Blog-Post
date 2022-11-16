import React from "react";
import "./NewBlog.css";
import Modal from "./UI/Modal";
import { useRef, useState } from "react";

function NewBlog(props) {
  const titleRef = useRef();
  const textRef = useRef();
  const imgUrl = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const referentTitle = titleRef;
    const referentText = textRef;
    const referentImg = imgUrl;
    if (
      referentTitle.current.value.trim().length === 0 ||
      referentText.current.value.trim().length === 0 ||
      referentImg.current.value.trim().length === 0
    ) {
      return alert("Please enter valid information");
    }
    const blogData = {
      title: referentTitle.current.value,
      text: referentText.current.value,
      img: referentImg.current.value,
    };
    props.onAdd(blogData);
    props.closeBlog();
  };

  return (
    <Modal>
      <form className="form-control" onSubmit={submitHandler}>
        <label>Enter title name</label>
        <input ref={titleRef} type="text" name="text" />
        <label>Enter text name</label>
        <input ref={textRef} type="text" />
        <label>Enter img url</label>
        <input ref={imgUrl} type="url" />
        <div className="btn-section">
          <button className="btn">Submit</button>
          <button className="btn" onClick={props.closeBlog}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default NewBlog;

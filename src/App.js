import "./App.css";
import BlogList from "./components/BlogList";
import blogs from "./components/data";
import { useState } from "react";
import NewBlog from "./components/NewBlog";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [items, setItems] = useState(blogs);

  const addNewBlogsHanlder = (newItems) => {
    setItems((prevItems) => {
      return [newItems, ...prevItems];
    });
  };

  const getFavorites = (list) => {
    const filteredItems = list.filter((item) => item.isFavorite === true);

    return filteredItems;
  };

  const createBlogModal = () => {
    setShowModal(true);
  };

  const closeBlogModal = () => [setShowModal(false)];
  return (
    <div className="App">
      <h1>My blog</h1>

      {showModal ? (
        <NewBlog closeBlog={closeBlogModal} onAdd={addNewBlogsHanlder} />
      ) : (
        <button
          onClick={createBlogModal}
          type="button"
          className="btn btn-primary"
        >
          Create Blog
        </button>
      )}
      <BlogList setItems={setItems} items={items} />
      <h2>Favorites:</h2>

      <BlogList setItems={setItems} items={getFavorites(items)} />
    </div>
  );
}

export default App;

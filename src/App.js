import "./App.css";
import BlogList from "./components/BlogList";
import blogs from "./components/data";
import { useState } from "react";
import NewBlog from "./components/NewBlog";

function App() {
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
  return (
    <div className="App">
      <h1>My blog</h1>
      <button>Create Blog</button>
      <NewBlog onAdd={addNewBlogsHanlder} />

      <BlogList setItems={setItems} items={items} />

      <h2>Favorites:</h2>

      <BlogList setItems={setItems} items={getFavorites(items)} />
    </div>
  );
}

export default App;

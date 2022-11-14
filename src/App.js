import "./App.css";
import BlogList from "./components/BlogList";
import blogs from "./components/data";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(blogs);

 const getFavorites = (list) => {
    const filteredItems = list.filter((item) => item.isFavorite === true);

    return filteredItems;
  };
  return (
    <div className="App">
      <h1>My blog</h1>

      <BlogList setItems={setItems} items={items} />

      <h2>Favorites:</h2>

      <BlogList setItems={setItems} items={getFavorites(items)} />
    </div>
  );
}

export default App;

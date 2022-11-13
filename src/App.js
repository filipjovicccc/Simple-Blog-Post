import "./App.css";
import BlogList from "./components/BlogList";
import blogs from "./components/data";

function App() {
  return (
    <div className="App">
      <h1>My blog</h1>
     
      <BlogList items={blogs} />
    </div>
  );
}

export default App;

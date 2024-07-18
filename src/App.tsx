import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl text-center">Remote app</h1>
      <Link to="/details">Details</Link>
    </>
  );
}

export default App;

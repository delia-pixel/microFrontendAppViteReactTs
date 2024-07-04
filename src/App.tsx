import "./App.css";
import Header from "./components/Header";
import MoovieItem from "./components/MoovieItem";

function App() {
  return (
    <>
      <Header />
      <MoovieItem
        image="lion.png"
        title={"Game of thrones"}
        date={"20 April"}
        age={12}
      />
    </>
  );
}

export default App;

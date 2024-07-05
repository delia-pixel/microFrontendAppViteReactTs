import "./App.css";
import Header from "./components/Header";
import MoovieItem from "./components/MoovieItem";

function App() {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        <MoovieItem
          image="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"
          title={"Game of thrones"}
          date={"20 April"}
          age={12}
        />
        <MoovieItem
          image="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"
          title={"Game of thrones"}
          date={"20 April"}
          age={12}
        />
        <MoovieItem
          image="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"
          title={"Game of thrones"}
          date={"20 April"}
          age={12}
        />
        <MoovieItem
          image="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"
          title={"Game of thrones"}
          date={"20 April"}
          age={12}
        />
      </div>
    </>
  );
}

export default App;

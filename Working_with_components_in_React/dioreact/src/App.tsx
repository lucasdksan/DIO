import Card from "./components/Card";
import Item from "./components/Item";

function App() {
  return (
    <>
      <h1>HELLO WORLD</h1>
      <ul className="list-group">
        <Item
          text="Lucas"
          link="/"
        />
        <Item
          text="Lucas"
          link="/"
        />
      </ul>
      <Card />
    </>
  );
}

export default App;

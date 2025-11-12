import ListGroup from "./components/ListGroup";

function App() {
  const heading = "Cities";
  const items = ["New York", "London", "Athens", "Tokyo", "Hanoi"];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

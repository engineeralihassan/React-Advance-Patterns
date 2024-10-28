import { useState } from "react";
// import "./App.css";
const items = [
  { description: "Bananas", quantity: 12, packed: false, id: 1 },
  { description: "Tomatos", quantity: 12, packed: true, id: 2 },
  { description: "Gingers", quantity: 12, packed: false, id: 3 },
  { description: "Gingers", quantity: 12, packed: false, id: 4 },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // const newItem = { description, quantity, packed: false, id: Date.now() };

    // onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  // const [sortBy, setSortBy] = useState("input");

  // let sortedItems;

  // if (sortBy === "input") sortedItems = items;

  // if (sortBy === "description")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));

  // if (sortBy === "packed")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => Number(a.packed) - Number(b.packed));
  console.log("Ites are", items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            // onDeleteItem={onDeleteItem}
            // onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {/* <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div> */}
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      {/* <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      /> */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  // if (!items.length)
  //   return (
  //     <p className="stats">
  //       <em>Start adding some items to your packing list 🚀</em>
  //     </p>
  //   );

  const numItems = 50;
  const numPacked = 5;
  const percentage = 10;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

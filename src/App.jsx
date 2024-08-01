import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Grocery from "./components/Grocery";
import Footer from "./components/Footer";

const groceryItems = [];

export default function App() {
  const [items, setItems] = useState(groceryItems)

  function HandleAddItem(item) {
    setItems([...items, item])
  }

  function HandleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); //menelusuri id yang berbeda dengan item.id yang ingin kita delete
  }

  function HandleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)) //menelusuri items yang masing masing elementnya dipetakan 
    // menjadi item lalu disamakan berdasarkan item.id yang diklik, 
    // jika bernilai true makan item akan dispread dan checked akan dibalik atau di NOT (yang awalanya true akan menjadi false)
  }

  function HandleResetItems() {
    setItems([])
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={HandleAddItem} />
      <Grocery items={items} onDeleteItem={HandleDeleteItem} onToggleItem={HandleToggleItem} onResetItems={HandleResetItems} />
      <Footer items={items} />
    </div>
  );
}
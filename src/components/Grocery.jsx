import { useState } from "react";
import Item from "./Item";

export default function Grocery({ items, onDeleteItem, onToggleItem, onResetItems }) {

    const [sortBy, setSortBy] = useState('input')
  
    let sortedItems;
  
    if (sortBy === 'input') {
      sortedItems = items;
    }
  
    if (sortBy === 'name') {
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    }
  
    if (sortBy === 'checked') {
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
    }
  
    return (
      <>
        <div className="list">
          <ul>
            {sortedItems.map((item) => (
              <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
            ))}
          </ul>
        </div>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onResetItems}>Bersihkan Daftar</button> {/*Tidak perlu menggunakan anonymous function karena tidak mengirim parameter*/}
        </div>
      </>
    )
  }
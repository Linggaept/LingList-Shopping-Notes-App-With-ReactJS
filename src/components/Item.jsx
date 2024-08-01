export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} /> {/*wajib menggunakan arrow dan anonymous function, karena mengirimkan parameter serta saat ingin aksi callbacknya berjalan saat tombol diklik*/}
        <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.name}</span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button> {/*wajib menggunakan arrow dan anonymous function, karena mengirimkan parameter serta saat ingin aksi callbacknya berjalan saat tombol diklik*/}
      </li>
    )
  }
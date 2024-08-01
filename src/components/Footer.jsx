export default function Footer({ items }) {
    if (!items.length) return <footer className="stats">Daftar Belanjaan Masih Kosong</footer>
  
    const checkedItems = items.filter((item) => item.checked).length
    const percentage = Math.round((checkedItems / items.length) * 100)
    return <footer className="stats">Ada {items.length} barang di daftar belanjaan, {checkedItems} barang sudah dibeli {percentage}%</footer>
  }
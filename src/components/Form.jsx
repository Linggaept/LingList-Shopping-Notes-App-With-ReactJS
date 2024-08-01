import { useState } from "react"

export default function Form({ onAddItem }) {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [error, setError] = useState('')
    const [succsess, setSuccess] = useState('')
    const [loading, setLoading] = useState('')
  
  
    function handleSubmit(e) {
      e.preventDefault();  //untuk mematikan fungsi submit/ render pindah halaman browser
      setError('');
      setSuccess('')
  
      if (!name) {
        setError('Anda Belum Memasukkan Nama Barang Anda!');
        return;
      }
  
      setLoading(true);
  
      setTimeout(() => {
        setName('');
        setQuantity(1);      
  
        const newItem = { name, quantity, checked: false, id: Date.now() }
        onAddItem(newItem); //memasukkan item baru (new items) ke dalam grocery items, lewat props destructuring onAddItem yang berisi {HandelAddItem})
  
        setLoading(false)
  
        if (newItem) {
          setSuccess('Anda Berhasil Memasukkan Data!');
          return;
        }
        
      }, 1000);
    }
  
  
  
    const quantityNum = [...Array(20)].map((_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))
  
    return (
      <>
        <form className="add-form" onSubmit={handleSubmit}>
          <h3>Hari ini belanja apa kita?</h3>
          <div>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {quantityNum}
            </select>
            <input type="text" placeholder="nama barang..." value={name} onChange={(e) =>setName(e.target.value)} />
          </div>
          <button>Tambah</button>
        </form>
        {loading && <p className="error-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}
        {succsess && <p className="error-text">{succsess}</p>}
      </>
    )
  }
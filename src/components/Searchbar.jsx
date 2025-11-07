import { useState } from 'react'

export default function Searchbar({ setBusqueda }) {
  const [texto, setTexto] = useState('')

  const buscar = () => {
    if (texto.trim() !== "") {
      setBusqueda(texto)
      setTexto('')
    }
  }

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="flex">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Search..."
          className="flex-1 px-4 py-2 bg-gray-200 border border-gray-300 rounded-l-lg"
        />
        <button 
          onClick={buscar}
          className="bg-slate-900 text-white px-6 py-2 rounded-r-lg hover:bg-gray-700 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}


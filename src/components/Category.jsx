import React from "react"

export default function Category({ setBusqueda }) {
  const categorias = ["Mountain", "Beaches", "Birds", "Food"]

  const seleccionarCategoria = (categoria) => {
    setBusqueda(categoria)
  }

  return (
    <div className="flex justify-center gap-3 mb-8 flex-wrap">
      {categorias.map(categoria => (
        <button
          key={categoria}
          onClick={() => seleccionarCategoria(categoria)}
          className="w-24 py-2 bg-slate-900 text-white rounded-lg hover:bg-gray-700 font-josefin cursor-pointer"
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}


import { useState } from 'react'
import Searchbar from './components/Searchbar'
import Category from './components/Category'
import Gallery from './components/Gallery'

export default function App() {
  const [busqueda, setBusqueda] = useState("nature")

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-6 sm:my-8 font-lobster">SnapShot</h1>
      
      <Searchbar setBusqueda={setBusqueda} />
      <Category setBusqueda={setBusqueda} />
      <Gallery busqueda={busqueda} />
    </div>
  )
}


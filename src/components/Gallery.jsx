import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

export default function Gallery({ busqueda }) {
  const [fotos, setFotos] = useState([])
  const [cargando, setCargando] = useState(false)
  const API_KEY = "k6exhiDvgLHih5LC0xzqd61uXlOUzprse27z8sMh1zoNzre88NqAjN5j"

  useEffect(() => {
    const buscarFotos = async () => {
      setCargando(true)
      
      await new Promise(resolve => setTimeout(resolve, 500))

      try {
        const respuesta = await axios.get(`https://api.pexels.com/v1/search?query=${busqueda}&per_page=12`, {
          headers: { 
            Authorization: API_KEY 
          }
        })
        setFotos(respuesta.data.photos)
      } catch (error) {
        console.log('Error:', error)
      } 
        setCargando(false)
    }

    buscarFotos()

  }, [busqueda])

  if (cargando) {
    return <Spinner />
  }

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 capitalize font-josefin">
            {busqueda} Pictures
      </h2>
      
      <div className="w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2">
        {fotos.map(({ id, src, photographer }) => (
          <img 
            key={id}
            src={src.large} 
            alt={photographer}
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  )
}


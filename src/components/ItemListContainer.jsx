import './ItemListContainer.css'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react'
import { peticion } from '../utils/Mock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer ({mensaje,mensaje2}) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams ()

 

  useEffect (() => {

    if (idCategoria) {
      peticion
      .then(respuesta => {
        setProductos(respuesta.filter(productos => productos.categoria === idCategoria))
        }
      )
      .finally(()=> setLoading(false)) 
    }else {
        peticion
      .then(respuesta => {
        setProductos(respuesta)
        }
      )
      .finally(()=> setLoading(false)) 
    }
  }, [idCategoria])
  

console.log(productos)

const onAdd = (cant) => {
  console.log(cant)
}

  return (
    <>
      <h2 className="message">{mensaje}</h2>
      <h2 className="message2">{mensaje2}</h2>
      {loading ? <h3>Cargando...</h3> :  <ItemList productos = {productos}/>}
      <ItemCount stock={7} initial={1} onAdd={onAdd} />
    </>
  )
}

  export default ItemListContainer
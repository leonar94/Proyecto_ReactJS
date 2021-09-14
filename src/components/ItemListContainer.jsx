import './ItemListContainer.css'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react'
import { peticion } from '../utils/Mock'
import ItemList from '../ItemList/ItemList'




function ItemListContainer ({mensaje,mensaje2}) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {

    peticion
    //.then para sacar lo que esta dentro de la respuesta que es exitoso
      .then(respuesta => {
        setProductos(respuesta)
      })
      .finally(()=> setLoading(false))    
  }
  )
  

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
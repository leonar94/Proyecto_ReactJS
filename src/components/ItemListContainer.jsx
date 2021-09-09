import './ItemListContainer.css'
import ItemCount from './ItemCount'

function ItemListContainer ({mensaje,mensaje2}) {

const onAdd = (cant) => {
  console.log(cant)
}

  return (
    <>
      <h2 className="message">{mensaje}</h2>
      <h2 className="message2">{mensaje2}</h2>
      <ItemCount stock={7} initial={1} onAdd={onAdd} />
    </>
  )
}




  export default ItemListContainer
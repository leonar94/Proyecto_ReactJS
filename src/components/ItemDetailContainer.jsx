import { useState, useEffect } from "react";
import { getFetch } from "../utils/Mock";
import ItemDetail from "./ItemDetail/ItemDetail";
import ItemCount from './ItemCount'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    
    useEffect(() => {
        getFetch
        .then(resp =>setProducto(resp))
    }, [])

    const onAdd = (cant) => {
        console.log(cant)
      }
    return (
        <>
          <ItemDetail producto={producto}/>
          <ItemCount stock={7} initial={1} onAdd={onAdd} />
        </>

    ) 
    }

export default ItemDetailContainer
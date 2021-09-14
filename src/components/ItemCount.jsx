import { useState } from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function agregar () {
        if (count<stock) {
            setCount(count + 1) 
        }
        
    }

    function quitar () {
        if (count>0) {
        setCount (count - 1)
        }
        
    }


    const agregarCarrito=()=>{
        onAdd(count)
    }

    return (
    
        <div>
        <Button variant="outline-secondary" onClick={quitar}>-</Button>{' '}
        <Button variant="outline-secondary" onClick={agregarCarrito} disabled={count===0}>Agregar al carrito</Button>{' '}
        <Button variant="outline-secondary" onClick={agregar}>+</Button>{' '}
            <h1>{count}</h1>
        </div>
    )
}

export default ItemCount

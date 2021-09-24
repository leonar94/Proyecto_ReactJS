import { useState } from "react"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

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
        // onAdd(count)
        setCambiarBoton(false)
    }
    console.log (count)
    return (
    
        <div>
        <Button variant="outline-secondary" onClick={quitar}>-</Button>{' '}
        { cambiarBoton ? 
            <Button variant="outline-secondary" onClick={agregarCarrito} disabled={count===0}>Agregar al carrito</Button>
        :
        <div>
            <Link to='/'>
            <Button variant="outline-secondary" >Seguir comprando</Button>
            </Link>
            <Link to ={'/cart'}>
            <Button variant="outline-secondary">Finalizar compra</Button>
            </Link>
        </div>
        }
        
        <Button variant="outline-secondary" onClick={agregar}>+</Button>{' '}
            <h1>{count}</h1>
        </div>
    )
}

export default ItemCount

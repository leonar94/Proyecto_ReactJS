import './ItemListContainer.css'

const Mensaje = ({mensaje,mensaje2}) => {
    return (
    <>
      <h2 className="message">{mensaje}</h2>
      <h2 className="message2">{mensaje2}</h2>
    </>
    )
  }

  export default Mensaje
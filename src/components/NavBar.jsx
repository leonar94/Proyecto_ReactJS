import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'

const NavBar=()=>{
    return ( 
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">YB Lashes Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-justified">
                        <Nav.Link href="#home">SERVICIOS</Nav.Link>
                        <Nav.Link href="#link">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#home">GALERIA</Nav.Link>
                        <Nav.Link href="#link">CONTACTENOS</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    <CartWidget/> 
                </Navbar>

                 
</>
      
        )
       
    

    }
     
export default NavBar
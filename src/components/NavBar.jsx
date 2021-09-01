import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
                        <Nav.Link href="#home">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#link">NOSOTROS</Nav.Link>
                        <NavDropdown title="PROMOCIONES" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PROMOCION 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">PROMOCION 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">PROMOCION 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">CONTÁCTENOS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    <CartWidget/> 
                </Navbar>

                 
</>
      
        )
       
    

    }
     
export default NavBar
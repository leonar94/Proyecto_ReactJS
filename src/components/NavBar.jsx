import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css'
import { Link } from "react-router-dom"

const NavBar=()=>{
    return ( 
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand href="#home">YB Lashes Studio</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-justified">
                        <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
                        <Link to='/categoria/pestanas'>
                        <NavDropdown.Item href="#action/3.1">PESTAÑAS</NavDropdown.Item>
                        </Link>
                        <Link to='/categoria/cejas'>
                        <NavDropdown.Item href="#action/3.1">CEJAS</NavDropdown.Item>
                        </Link>
                         
                         </NavDropdown>
                        <Nav.Link href="#link">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#link">GALERIA</Nav.Link>
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
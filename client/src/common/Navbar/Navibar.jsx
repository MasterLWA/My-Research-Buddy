import React from "react"
import "../../App.css"
import logo from "../../Images/My Research Buddy - NavBar.png"
import { Navbar, Container,Nav } from 'react-bootstrap'


const Navibar = () => {
    return (
    <Navbar id="navbar" expand="lg">
       
        <Container className="d-flex justify-content-center">
      
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="auto"
            height="60"
          />
        </Navbar.Brand>

        </Container>

      </Navbar>
    );
    }

export default Navibar;
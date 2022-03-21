import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Navigationbar() {
  return (
    
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Nahban</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </>
  )
}

import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoInkanet from "../../images/inkanet Blanco.svg"


function ComponenteBarraNavegacion() {
    return (
        <Navbar expand="md" id="navbar">
        <Navbar.Brand href="/inicio">
            <img className="h-100" src={LogoInkanet} alt="Logo Inkanet" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="barra-nav">
                <NavDropdown title="Conócenos" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/conocenos/somos" id="drop-item"> ¿Quiénes Somos? </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/conocenos/cobertura" id="drop-item"> Cobertura en todo el Perú </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/conocenos/trabaja" id="drop-item"> Trabaja con nosotros </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/servicios/conectividad" id="drop-item"> Conectividad </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/servicios/gestionados" id="drop-item"> Servicios Gestionados </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/servicios/telefonia" id="drop-item"> Telefonía y CCUU </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/servicios/seguridad" id="drop-item"> Seguridad Gestionada </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/servicios/cloud" id="drop-item"> Servicios Cloud </NavDropdown.Item>
                    {/* <NavDropdown.Item as={Link} to="/servicios/sap" id="drop-item"> Servicios Sap </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/servicios/scirt" id="drop-item"> SCIRT </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link as={Link} to="/contacto" id="contacto">Contáctanos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default ComponenteBarraNavegacion;

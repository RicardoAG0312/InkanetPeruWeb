import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoInkanet from "../../images/inkanet Blanco.svg"
import { useState } from 'react';
import IconConectividad from '../../images/34.png.png';
import IconGestionados from '../../images/35.png.png';
import IconTelefonia from '../../images/36.png.png';
import IconSeguridad from '../../images/37.png.png';
import IconCloud from '../../images/39.png.png';

function ComponenteBarraNavegacion() {
    const [showConocenos, setShowConocenos] = useState(false);
    const [showServicios, setShowServicios] = useState(false);
    return (
        <Navbar expand="md" id="navbar">
            <Navbar.Brand href="/inicio">
                <img className="h-100" src={LogoInkanet} alt="Logo Inkanet" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="barra-nav">
                    <Nav.Link as={Link} to="/academia"> Academia </Nav.Link>
                    <NavDropdown title="Conócenos" id="basic-nav-dropdown"
                        onMouseEnter={() => setShowConocenos(true)}
                        onMouseLeave={() => setShowConocenos(false)}
                        show={showConocenos}
                    >
                        <NavDropdown.Item as={Link} to="/conocenos/somos" id="drop-item"> ¿Quiénes Somos? </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/conocenos/cobertura" id="drop-item"> Cobertura en todo el Perú </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/conocenos/trabaja" id="drop-item"> Trabaja con nosotros </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Servicios" id="basic-nav-dropdown"
                        onMouseEnter={() => setShowServicios(true)}
                        onMouseLeave={() => setShowServicios(false)}
                        show={showServicios}
                    >
                        <NavDropdown.Item as={Link} to="/servicios/conectividad" id="drop-item">
                            <img src={IconConectividad} alt="Conectividad" className="nav-icon me-1" style={{ height: "15px", width: "15px" }} /> Conectividad
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/servicios/gestionados" id="drop-item">
                            <img src={IconGestionados} alt="Servicios Gestionados" className="nav-icon me-1" style={{ height: "15px", width: "15px" }} /> Servicios Gestionados
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/servicios/telefonia" id="drop-item">
                            <img src={IconTelefonia} alt="Telefonía y CCUU" className="nav-icon me-1" style={{ height: "15px", width: "15px" }} /> Telefonía y CCUU
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/servicios/seguridad" id="drop-item">
                            <img src={IconSeguridad} alt="Seguridad Gestionada" className="nav-icon me-2" style={{ height: "15px", width: "15px" }} />Seguridad Gestionada
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/servicios/cloud" id="drop-item">
                            <img src={IconCloud} alt="Servicios Cloud" className="nav-icon me-1" style={{ height: "15px", width: "15px" }} /> Servicios Cloud
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contacto" id="contacto">Contáctanos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default ComponenteBarraNavegacion;

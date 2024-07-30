// Importaciones de bibliotecas
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import LogoInkanet from "./images/pruebas de logotipo.svg"
import LogoInkanetPie from "./images/Recurso 2.svg";
import {ComponenteInicio, ComponenteNosotros, ComponenteServicios, ComponenteSolucionesInternet, ComponenteSolucionesCiberseguridad, ComponenteSolucionesTelefonia, ComponenteContacto} from "./routers/routers";

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        let loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.remove();
        }
        let content = document.getElementById('content');
        if (content) {
            content.style.display = 'block';
        }
    }, 5000);
});

function App() {
    const navbarRef = useRef();
    useEffect(() => {
        let scrollInicial = window.pageXOffset;
        const handleScroll = () => {
            let scrollFinal = window.pageYOffset;
            if (scrollInicial > scrollFinal) {
                navbarRef.current.style.top = "0";
            } else {
                navbarRef.current.style.top = "-80px";
            }
            scrollInicial = scrollFinal;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="App">
            <div id="loading-screen">
                <img src={LogoInkanetPie} alt="Logo Inkanet" /> 
                <div className="spinner-border" role="status">
                    <span className="sr-only"> </span>
                </div>
            </div>
            <div id="content"> 
                <div class="boton-whatsapp" >
                    <a href="https://wa.me/51908827506" target="_blank" rel="noreferrer">
                        <i class="bi bi-whatsapp"> </i>
                    </a>
                </div>
                <Router>
                    <Navbar expand="md" id="navbar" ref={navbarRef}>
                            <Navbar.Brand href="/inicio">
                                <img className="h-100" src={LogoInkanet} alt="Logo Inkanet" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="barra-nav">
                                    <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
                                    <Nav.Link as={Link} to="/nosotros"> Nosotros </Nav.Link>
                                    <Nav.Link as={Link} to="/servicios"> Servicios </Nav.Link>
                                    <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/soluciones/internet" id="drop-item"> Internet 2.0 </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/soluciones/ciberseguridad" id="drop-item"> Ciberseguridad </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/soluciones/telefonia" id="drop-item"> Telefonía IP </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/contacto" id="contacto">Contacto</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    <Routes>
                        <Route index path='/' element={<Navigate to="/inicio" />}/>
                        <Route path='/inicio' element={<ComponenteInicio />}/>
                        <Route path='/nosotros' element={<ComponenteNosotros />}/>
                        <Route path='/servicios' element={<ComponenteServicios />}/>
                        <Route path='/soluciones/internet' element={<ComponenteSolucionesInternet />}/>
                        <Route path='/soluciones/ciberseguridad' element={<ComponenteSolucionesCiberseguridad />}/>
                        <Route path='/soluciones/telefonia' element={<ComponenteSolucionesTelefonia />}/>
                        <Route path='/contacto' element={<ComponenteContacto />}/>
                    </Routes>
                    <footer class="container-fluid">
                        <div class="row">
                            <div class="col-4 imagen">
                                <img class="footer-logo" src={LogoInkanetPie} alt="Logo Inkanet Perú" />
                            </div>
                            <div class="col-8 contenedorPie">
                                <div class="row">
                                    <div class="col-4 contain1">
                                        <div>
                                            <h3> NOSOTROS </h3>
                                            <Link to="/nosotros"> Nuestra Historia </Link>
                                            <Link to="/nosotros"> Nuestro Propósito </Link>
                                            <Link to="/nosotros"> Nuestros Principios </Link>
                                        </div>
                                        <div>
                                            <h3> SOLUCIONES </h3>
                                            <Link to="/soluciones/internet"> Internet 2.0 </Link>
                                            <Link to="/soluciones/ciberseguridad"> Ciberseguridad </Link>
                                            <Link to="/soluciones/telefonia"> Telefonía IP </Link>
                                        </div>
                                    </div>
                                    <div class="col-4 contain2">
                                        <div>
                                            <h3> SOPORTE TÉCNICO </h3>
                                            <Link to="/servicios"> Beneficios </Link>
                                            <Link to="/servicios"> Caracteristicas </Link>
                                            <Link to="/servicios"> ¿Por qué Inkanet? </Link>
                                        </div>
                                        <div>
                                            <a href="https://www.linkedin.com/company/inkanet-per%C3%BA/" target="_blank" rel="noreferrer">
                                                <img src={require("./images/13.png")} alt="Imagen Linkdln" />
                                            </a>
                                            <a href="https://wa.me/51908827506" target="_blank" rel="noreferrer">
                                                <img src={require("./images/14.png")} alt="Imagen whatsapp" />
                                            </a>
                                            <a href="mailto: ventas@inkanetperu.com" target="_blank" rel="noreferrer">
                                                <img src={require("./images/15.png")} alt="Imagen correo" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-4 contain3">
                                        <p class="m-0">
                                            «Somos una empresa peruana dedicada al rubro de las telecomunicaciones,
                                            enfocada en ofrecer fibra óptica a las distintas corporaciones del país,
                                            brindándoles un servicio estable de conexión»
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </Router>
            </div>
        </div>
    );
}

export default App;

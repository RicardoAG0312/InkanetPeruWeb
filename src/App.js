// Importaciones de bibliotecas
import React, {useEffect} from 'react';
// import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import LogoInkanetPie from "./images/Recurso 2.svg";
import {ComponenteInicio, ComponenteContactanos, ComponenteCobertura, ComponenteSomos, ComponenteTrabaja, ComponenteCloud, ComponenteConectividad, ComponenteGestionados, ComponenteSap, ComponenteScirt, ComponenteSeguridad, ComponenteTelefonia, ComponenteEmpresas, ComponenteRedes, ComponenteSatelital, ComponenteFibra} from "./routers/routers"


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

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};



function App() {
    return (
        <div className="App">
            <div id="loading-screen">
                <img src={LogoInkanetPie} alt="Logo Inkanet" /> 
                <div className="spinner-border" role="status">
                    <span className="sr-only"> </span>
                </div>
            </div>
            <div id="content"> 
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route index path='/' element={<Navigate to="/inicio" />}/>
                        <Route path='/inicio' element={<ComponenteInicio />} />
                        <Route path='/contacto' element={<ComponenteContactanos />} />

                        <Route path='/interconexion/empresas' element={<ComponenteEmpresas />} />
                        <Route path='/interconexion/redes' element={<ComponenteRedes />} />
                        <Route path='/interconexion/satelital' element={<ComponenteSatelital />} />
                        <Route path='/interconexion/fibra' element={<ComponenteFibra />} />

                        <Route path='/conocenos/cobertura' element={<ComponenteCobertura />} />
                        <Route path='/conocenos/somos' element={<ComponenteSomos />} />
                        <Route path='/conocenos/trabaja' element={<ComponenteTrabaja />} />

                        <Route path='/servicios/cloud' element={<ComponenteCloud />} />
                        <Route path='/servicios/conectividad' element={<ComponenteConectividad />} />
                        <Route path='/servicios/gestionados' element={<ComponenteGestionados />} />
                        <Route path='/servicios/sap' element={<ComponenteSap />} />
                        <Route path='/servicios/scirt' element={<ComponenteScirt />} />
                        <Route path='/servicios/seguridad' element={<ComponenteSeguridad />} />
                        <Route path='/servicios/telefonia' element={<ComponenteTelefonia />} />
                    </Routes>
                </Router>
                <footer class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-4 imagen">
                            <img class="footer-logo" src={LogoInkanetPie} alt="Logo Inkanet Perú" />
                        </div>
                        <div class="col-12 col-md-8 contenedorPie">
                            <div class="row">
                                <div class="col-12 col-md-4 contain1">
                                    <div>
                                        <h3> CONÓCENOS </h3>
                                        <a href="/conocenos/somos"> ¿Quiénes Somos? </a>
                                        <a href="/conocenos/cobertura"> Cobertura en Perú </a>
                                        <a href="/conocenos/trabaja"> Trabaja con nosotros </a>
                                    </div>
                                    <div>
                                        <h3> NUESTROS SERVICIOS </h3>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 contain2">
                                    <div>
                                        <a href="https://www.linkedin.com/company/inkanet-per%C3%BA/" target="_blank" rel="noreferrer">
                                            <img src={require("./images/13.png.png")} alt="Imagen Linkdln" />
                                        </a>
                                        <a href="https://wa.me/51908827506" target="_blank" rel="noreferrer">
                                            <img src={require("./images/14.png.png")} alt="Imagen whatsapp" />
                                        </a>
                                        <a href="mailto: ventas@inkanetperu.com" target="_blank" rel="noreferrer">
                                            <img src={require("./images/15.png.png")} alt="Imagen correo" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 contain3">
                                    <p class="m-0">
                                        «Somos una empresa peruana dedicada al rubro de las telecomunicaciones, enfocada en ofrecer fibra óptica a las distintas corporaciones del país, brindándoles un servicio estable de conexión»
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;

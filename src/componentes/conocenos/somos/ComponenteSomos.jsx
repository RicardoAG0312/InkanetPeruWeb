import React, { useState } from "react";
import { ComponenteBarraNavegacion } from "../../../routers/routers";
import LogoInkanet from "../../../images/Recurso 2.svg";
import Rombo from "../../../images/Grupo 74.svg";
import Image from 'react-bootstrap/Image';
import "./componenteSomos.css";
import BotonAnimado from "../../ui/BotonAnimado";
import ViñetasSomos from "../../ui/ViñetasSomos";
import Principios from "../../ui/Principios";


function BotonAnimadoSomos({ onClick, activo }) {
    return (
        <div 
            className={`boton-animado ${activo ? "activo" : ""}`}
            onClick={onClick}
        >
            {/* Fondo animado */}
            <div className="hover-bg"></div>

            {/* Ícono con animación */}
            <i className={`bi ${activo ? "bi-x-circle-fill" : "bi-plus-circle-fill"}`}></i> 

            {/* Texto */}
            <span>{activo ? "Menos Información" : "Más Información"}</span>
        </div>
    );
}

function ComponenteSomos() {
    const [mostrarTexto, setMostrarTexto] = useState(false);

    return (
        <>
            <section className="container-fluid p-0" style={{ background: "#3A4040", height: "auto" }}>
                <ComponenteBarraNavegacion />
                <div className="row p-0 m-0">
                    {/* Sección de texto */}
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column text-center text-md-start min-vh-100">
                        <div className="d-flex flex-column align-items-md-start align-items-center justify-content-center w-75 w-md-75 gap-1 mb-5 ">
                            <h1 className="text-white fw-bold display-4" style={{ width: "60%" }}>
                                ¿Quiénes <span className="fw-light"> Somos?</span>
                            </h1>
                            <p className="text-white"> 
                                Inkanet Perú S.A.C. es una empresa 100% de capital peruano, especializada en ciberseguridad y reconocida por trabajar con las mejores marcas del sector, contando con personal altamente calificado.
                            </p>

                            {/* Párrafo oculto con animación */}
                            <p className={`text-white parrafo-oculto ${mostrarTexto ? "visible" : ""}`}>
                                Brindamos servicios para entidades gubernamentales y privadas a nivel nacional, acumulando una amplia experiencia en despliegues masivos de soluciones de protección para el usuario final.
                            </p>

                            <BotonAnimadoSomos 
                                onClick={() => setMostrarTexto(!mostrarTexto)} 
                                activo={mostrarTexto}
                            />
                        </div>
                    </div>

                    {/* Sección de imagen */}
                    <div className="mt-5 col-12 col-md-6 d-flex justify-content-center align-items-center flex-column min-vh-100">
                        <img src={LogoInkanet} alt="Imagen Logo Inkanet" className="img-fluid w-75 w-md-auto h-auto"/>
                    </div>
                </div>
            </section>
            <section className="container-fluid p-0" style={{ background: "#FFFFFF", height: "auto" }}>
                <div className="row p-5 m-0">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
                        <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                            <h1 className="text-black fw-bold display-4" style={{ fontSize: "3.5rem", maxWidth: "70%" }}>
                                Nuestro <span className="fw-light">Enfoque </span>
                            </h1>
                            <p style={{ color: "black", fontSize: "1.2rem" }} className="text-justify text-md-start">
                                <i style={{ color: "#1FB3AE" }} className="bi bi-play-fill"></i> 
                                Empoderamos a las organizaciones para prosperar en la era digital con confianza y resiliencia, creando un entorno cibernético seguro donde puedan aprovechar las oportunidades tecnológicas sin temor a amenazas.
                            </p>
                            <p style={{ color: "black", fontSize: "1.2rem" }} className="text-justify text-md-start">
                                <i style={{ color: "#1FB3AE" }} className="bi bi-play-fill"></i> 
                                Nos posicionamos como un aliado confiable en ciberseguridad, ofreciendo soluciones de vanguardia adaptadas a las necesidades del entorno digital cambiante.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                        {/* <img src={require("../../../images/diseño9.png")} alt="Imagen Logo Inkanet" className="img-fluid w-100 w-md-auto h-auto"/> */}
                        <Image src={require("../../../images/diseño9.png")} rounded alt="Imagen Logo Inkanet" className="img-fluid w-100 w-md-auto h-auto"/>
                    </div>
                </div>
            </section>
            <section className="container-fluid p-5 m-0 lideres">
                <div style={{ position: "absolute", zIndex: "2", width: "40%", maxWidth: "600px" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "3.5rem" }} className="text-white text-center text-md-start">
                        Lideres en <span style={{ fontWeight: "100" }}>Comunicaciones Corporativas</span>
                    </h1>
                </div>
            </section>
            <section className="container-fluid p-5 m-0" style={{background: "#1A1A1A", height: "auto"}}>
                <div className="row p-4 m-0">
                    {/* Columna izquierda */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
                        <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                            <h1 className="text-white display-4" style={{ fontSize: "3rem", maxWidth: "100%", width: "80%" }}>
                                Actualmente Atendemos a más de
                            </h1>
                            <h1 className="fw-bold display-4" style={{color: "#1FB3AE", fontSize: "3rem", maxWidth: "100%",width: "50%" }}>
                                4,800 Clientes
                            </h1>
                            <p className="text-white" style={{ maxWidth: "60%" }}>
                                Alcanzando un índice de renovación de contratos por encima del 100%.
                            </p>
                            <BotonAnimado 
                                colorIconoBase="white"
                                colorLetraBase="white"
                                colorBordeBase="white"
                                colorIconoPress="#1FB3AE"
                                fondoTextoPress="white"
                                colorLetraPress="black"
                                nav="/contacto"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-between align-items-center">
                        <ViñetasSomos 
                            texto="Certificados "
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                        <img src={Rombo} alt="img" className="img-fluid"/>
                        <ViñetasSomos 
                            texto="Cobertura a todo el Perú" 
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                        <img src={Rombo} alt="img" className="img-fluid"/>
                        <ViñetasSomos 
                            texto="Personal propio certificado para atención y soporte 24×7 los 365 días del año." 
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                        <img src={Rombo} alt="img" className="img-fluid"/>
                        <ViñetasSomos 
                            texto="Facturación clara y transparente." 
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                    </div>
                </div>
            </section>
            <section className="container-fluid seccion-principios">
                <header className="titulo-an">
                    Nuestros <span style={{fontWeight: "100"}}>Valores </span>
                </header>
                <div className="container">
                    <div className="row">
                        <Principios 
                            titulo="Confidencialidad"
                            texto="La confidencialidad es esencial para nosotros. Protegemos su información con sistemas de seguridad de vanguardia."
                            imagen="1"
                        />
                        <Principios 
                            titulo="Integridad"
                            texto="Nos esforzamos por mantener la integridad de sus datos. Puede confiar en la precisión y fiabilidad de la información que manejamos."
                            imagen="2"
                        />
                        <Principios 
                            titulo="Disponibilidad"
                            texto="Nuestros servicios están diseñados para estar siempre disponibles. Puede acceder a sus datos cuando los necesite."
                            imagen="3"
                        />
                        <Principios 
                            titulo="Autenticidad"
                            texto="Nos aseguramos de que toda la información que manejamos sea auténtica y verificable. Puede confiar en la autenticidad de sus datos."
                            imagen="4"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ComponenteSomos;

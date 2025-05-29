import React from 'react'
import { ComponenteBarraNavegacion } from "../../routers/routers"
import AnimatedSection from "../AnimatedSection";
import MapaPeru from "../../images/mapa.png";
import ViñetasSomos from "../ui/ViñetasSomos";
import Rombo from "../../images/Grupo 74.svg";



function ComponenteAcademia() {
    return (
        <>
            <section className="container-fluid p-0 contactanos-section">
                <ComponenteBarraNavegacion />
                <div className="row h-100 m-4 row-header d-flex justify-content-center align-items-center">
                    <AnimatedSection as="div" direction="top" className="p-5 col-md-6 col-12 d-flex justify-content-center align-items-start flex-column gap-3">
                        <h1 className="text-white fw-bold" style={{ fontSize: "60px", width: "60%", textShadow: "2px 2px 2px black" }}>
                            Academia Inkanet: Conocimiento que impulsa tu crecimiento
                        </h1>
                        <h5 className="text-white"> Para visualizar nuestros cursos y manuales, inicia sesión con tu usuario y contraseña. </h5>
                        <p className="text-white"> Este contenido esta disponible solo para clientes y colaboradores autorizados. </p>
                    </AnimatedSection>

                    {/* Sección del formulario */}
                    <div className="content-headForm col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                        <AnimatedSection as="div" direction="bottom" className="container headForm h-100">
                            <h2 className='text-center'> Inicia sesión para continuar </h2>
                            <form className="d-flex align-items-center justify-content-center flex-column gap-2 w-100" method="POST">
                                <input className="w-100 mt-3 p-2" type="text" name="usuario" placeholder="Usuario:" required />
                                <input className="w-100 mt-3 p-2" type="password" name="contraseña" placeholder="Contraseña:" required />
                                <span className="mt-3" style={{ fontSize: "12px", color: "gray" }}>
                                    ¿No tienes una cuenta? Contáctanos para solicitar acceso.
                                </span>
                                <button type="submit" className="botton"> Iniciar Sesión </button>
                            </form>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
            <section className='container red-en-peru'>
                <div className='row m-5'>
                    <AnimatedSection as="div" direction="top" className="col-md-6 col-12 d-flex justify-content-center align-content-center flex-column">
                        <h1 style={{ fontSize: "4rem", fontWeight: "100", marginBottom: "15px" }}> ¿Qué es la <span style={{ fontWeight: "bold" }}> Academia Inkanet? </span></h1>
                        <p style={{ color: "black" }}> <i style={{ color: "#1FB3AE" }} className="bi bi-play-fill"></i> La La Academia Inkanet es nuestra plataforma de capacitación exclusiva, diseñada para brindarte el conocimiento necesario para aprovechar al máximo los servicios y soluciones tecnológicas que ofrecemos.  </p>
                        <p style={{ color: "black" }}> <i style={{ color: "#1FB3AE" }} className="bi bi-play-fill"></i> A través de cursos, manuales interactivos y sesiones especializadas, te acompañamos en cada paso para que gestiones, configures y optimices tu infraestructura TI con confianza. </p>
                    </AnimatedSection>
                    <AnimatedSection as="div" direction="bottom" className="col-md-6 col-12 d-flex justify-content-center align-items-center img-fluid">
                        <img src={MapaPeru} alt='mapaperu' className='mapaperu' />
                    </AnimatedSection>
                </div>
            </section>
            <section className="clientes container-fluid p-5 m-0" style={{ background: "#1A1A1A", height: "auto" }}>
                <div className="row p-4 m-0">
                    {/* Columna izquierda */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
                        <AnimatedSection as="div" direction="right" className="d-flex flex-column justify-content-center align-items-start gap-3">
                            <h1 className="text-white display-4" style={{ fontSize: "3rem", maxWidth: "100%", width: "80%" }}>
                                Con Academia
                            </h1>
                            <h1 className="fw-bold display-4" style={{ color: "#1FB3AE", fontSize: "3rem", maxWidth: "100%" }}>
                                Inkanet podrás:
                            </h1>
                            <p className="text-white" style={{ maxWidth: "60%" }}>
                                Este servicio está incluido para clientes activos y partners de Inkanet como parte de nuestro compromiso con una atención integral y soporte continuo.
                            </p>
                        </AnimatedSection>
                    </div>
                    <div className="clientes-beneficios col-12 col-md-6 d-flex flex-column justify-content-between align-items-center">
                        <ViñetasSomos
                            texto="Acceder a contenido actualizado y práctico sobre nuestras principales soluciones."
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                        <img src={Rombo} alt="img" className="img-fluid" />
                        <ViñetasSomos
                            texto="Capacitar a tu equipo con recursos creados por especialistas en ciberseguridad y soporte técnico."
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                        <img src={Rombo} alt="img" className="img-fluid" />
                        <ViñetasSomos
                            texto="Consultar manuales y tutoriales cuando lo necesites, desde cualquier dispositivo."
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                        <img src={Rombo} alt="img" className="img-fluid" />
                        <ViñetasSomos
                            texto="Mejorar la autonomía de tu organización en el uso de herramientas y plataformas tecnológicas."
                            fondo="#1A1A1A"
                            fondoIcono="#1FB3AE"
                            colorLetra="white"
                            colorIcono="white"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteAcademia
import React from 'react';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import MapaPeru from "../../../images/mapa.png";
import CuatroCuatro from "../../../images/44.png.png";
import AnimatedSection from '../../AnimatedSection';
import "./cobertura.css";

function ComponenteCobertura() {
    return (
        <>
            <section className='container-fluid p-0 cobertura-section'>
                <ComponenteBarraNavegacion />
                <HeaderForm
                    titulo = "Cobertura de fibra optica en todo el Perú"
                />
            </section>
            <section className='container red-en-peru'>
                <div className='row m-5'>
                    <AnimatedSection as="div" direction="top" className="col-md-6 col-12 d-flex justify-content-center align-content-center flex-column">
                        <h1 style={{fontSize: "4rem", fontWeight: "bold", width: "50%", marginBottom: "15px"}}>Red en <span style={{fontWeight: "100"}}> el Perú </span></h1>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Nuestra red de alta velocidad se fundamenta en un anillo de fibra óptica que abarca todo el territorio peruano, garantizando una conexión robusta y eficiente. </p>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i>  En Lima y Callao, la red metropolitana está compuesta por 12 nodos estratégicamente distribuidos, formando una infraestructura central que opera con tecnología Ten Gigabit Ethernet. Su diseño redundante asegura la continuidad del servicio incluso ante posibles fallos en las conexiones principales.</p>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i>  Utilizamos un protocolo de transmisión compatible con redes locales Ethernet, lo que minimiza los retrasos habituales en el mercado. </p>

                    </AnimatedSection>
                    <AnimatedSection as="div" direction="bottom" className="col-md-6 col-12 d-flex justify-content-center align-items-center img-fluid">
                        <img src={MapaPeru} alt='mapaperu' className='mapaperu'/>
                    </AnimatedSection>
                </div>
            </section>
            <section className='container-fluid' style={{backgroundColor:"#1A1A1A", height: "auto"}}>
                <div className="row filaFigura justify-content-center">
                    <AnimatedSection as="div" direction="right" className="col figuraGeo text-center" style={{maxWidth: "400px"}}>
                        <div className='imagenVineta d-flex justify-content-center'>
                            <img src={CuatroCuatro} alt='43' className=''/>
                            
                        </div>
                        <h1 className='mt-4'>Velocidad <span style={{color:"#09AEAF"}}>de conexión</span></h1>
                        <p>Nos ajustamos a los requerimientos de conectividad de tu empresa, ofreciendo un servicio de Internet por fibra óptica que es altamente escalable, confiable y compatible con diversas soluciones de seguridad informática.</p>
                    </AnimatedSection>
                </div>
            </section>
            <section className="container">
                <div className="formulario p-5">
                    <h1 style={{fontSize: "60px"}}> Contacta a un <span style={{fontWeight: "100"}}> <br/>experto </span></h1>
                    <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i>Llena tus datos y nos comunicaremos contigo.</p>
                    <form action="https://formsubmit.co/ea3030451b381f488f15a922403e35c4" method="POST">
                        <AnimatedSection as="div" direction="left" className="row mb-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Nombres' id="nombres" name="nombres" required/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Apellidos' name="apellidos" id="apellidos" required/>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection as="div" direction="right" className="row mb-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-lg input-personalizado" placeholder='RUC' id="ruc" name="ruc"required/>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control form-control-lg input-personalizado" placeholder='Telefono/Celular' name="telefono" id="telefono" required/>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection as="div" direction="left" className="row mb-3">
                            <div className="col-md-6">
                                <input type="email" className="form-control form-control-lg input-personalizado" placeholder='Email' id="email" name="email" required/>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection as="div" direction="bottom" className="mb-2">
                            <input type="checkbox" id="info" className="me-2" required/>
                            <label htmlFor="info">Deseo recibir información de ofertas y promociones</label>
                        </AnimatedSection>
                        <AnimatedSection as="div" direction="bottom" className="mb-4">
                            <input type="checkbox" id="politica" className="me-2" required/>
                            <label htmlFor="politica">
                                Acepto la <a style={{ color: "#05AFA5", textDecoration: "none" }} href={process.env.PUBLIC_URL + "/Politica_Privacidad.pdf"} download={"Política_Protección_Datos_Inkanet.pdf"} rel="noopener noreferrer">Política de protección de datos</a>
                            </label>
                        </AnimatedSection>
                        <button
                        type="submit"
                        className="btn "
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "10px",
                            borderRadius: "20px",
                            border: "none",
                            transition: "background-color 0.3s",
                            width: "200px"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#05AFA5"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "black"}
                        >
                        Aceptar
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ComponenteCobertura

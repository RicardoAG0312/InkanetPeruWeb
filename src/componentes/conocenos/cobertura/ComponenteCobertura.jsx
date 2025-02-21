import React from 'react';
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import Cartas from '../../ui/Cartas';
import MapaPeru from "../../../images/mapa del peru.png";
import CuatroTres from "../../../images/43.png";
import CuatroCuatro from "../../../images/44.png";
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
            <section className='container'>
                <div className='row m-5'>
                    <div className="col-md-6 col-12 d-flex justify-content-center align-content-center flex-column">
                        <h1 style={{fontSize: "4rem", fontWeight: "bold", width: "50%", marginBottom: "15px"}}>Red en <span style={{fontWeight: "100"}}> el Peru </span></h1>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Nuestra red de alta velocidad se fundamenta en un anillo de fibra óptica que abarca todo el territorio peruano, garantizando una conexión robusta y eficiente. </p>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i>  En Lima y Callao, la red metropolitana está compuesta por 12 nodos estratégicamente distribuidos, formando una infraestructura central que opera con tecnología Ten Gigabit Ethernet. Su diseño redundante asegura la continuidad del servicio incluso ante posibles fallos en las conexiones principales.</p>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i>  Utilizamos un protocolo de transmisión compatible con redes locales Ethernet, lo que minimiza los retrasos habituales en el mercado. </p>

                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center img-fluid">
                        <img src={MapaPeru} alt='mapaperu' className='mapaperu'/>
                    </div>
                </div>
            </section>
            <section className='container-fluid' style={{backgroundColor:"#1A1A1A", height: "auto"}}>
                <div className="row filaFigura justify-content-center">
                    <div className="col figuraGeo text-center" style={{maxWidth: "400px"}}>
                        <div className='imagenVineta d-flex justify-content-center'>
                            <img src={CuatroTres} alt='43' className=''/>
                        </div>
                        <h1 className='mt-4'>Miembro de <span style={{color:"#09AEAF"}}>NAPerú</span></h1>
                        <p>Desde 2006, Inkanet forma parte del NAP y, desde 2012, es miembro del Consejo Directivo de la Asociación NAP Perú, que reúne a las principales empresas de telecomunicaciones del país, facilitando el intercambio de datos entre sus redes.</p>
                    </div>
                    <div className="col figuraGeo text-center" style={{maxWidth: "400px"}}>
                        <div className='imagenVineta d-flex justify-content-center'>
                            <img src={CuatroCuatro} alt='43' className=''/>
                        </div>
                        <h1 className='mt-4'>Velocidad <span style={{color:"#09AEAF"}}>de conexión</span></h1>
                        <p>Nos ajustamos a los requerimientos de conectividad de tu empresa, ofreciendo un servicio de Internet por fibra óptica que es altamente escalable, confiable y compatible con diversas soluciones de seguridad informática.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteCobertura

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./inicio.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import {ComponenteBarraNavegacion} from "../../routers/routers"
import VideoPortada1 from "../../images/Portada 1.mp4"
import VideoPortada2 from "../../images/Portada 2.mp4"
import VideoPortada3 from "../../images/Portada 3.mp4"
import VideoPortada4 from "../../images/Portada 5.mp4"
import BotonAnimado from "../ui/BotonAnimado";
import ImagenInicio from "../../images/inicio.png"

export default function ComponenteInicio() {
    const navigate = useNavigate();
    const images = [
        require("../../images/8.png.png"),
        require("../../images/133.png.png"),
        require("../../images/24.png.png"),
        require("../../images/10.png.png"),
        require("../../images/Fortinet.png.png"),
        require("../../images/26.png.png"),
        require("../../images/18.png.png"),
        require("../../images/16.png.png"),
        require("../../images/20.png.png"),
        require("../../images/22.png.png"),
        require("../../images/28.png.png"),
        require("../../images/135.png.png"),
        require("../../images/32.png.png"),
        require("../../images/137.png.png"),
        require("../../images/138.png.png"),
        // require("../../images/143.png.png"),
        require("../../images/145.png.png"),
        // require("../../images/147.png.png"),
        // require("../../images/149.png.png"),
        require("../../images/151.png.png"),
        require("../../images/153.png.png"),
    ];
    // Dividir las imágenes en grupos de 4 para que se muestren en cada slide del carrusel
    const chunkSize = 3;
    const imageChunks = [];
    for (let i = 0; i < images.length; i += chunkSize) {
        imageChunks.push(images.slice(i, i + chunkSize));
    }
    return (
        <>
            <section className='contenedorPrincipal'>
                <ComponenteBarraNavegacion />
                <Carousel className='carousel' data-bs-theme="dark"  controls={false}>
                    <Carousel.Item interval={2500}>
                        <div className="video-container">
                            <video className="d-block w-100" autoPlay loop muted>
                                <source src={VideoPortada1} type="video/mp4" />
                            </video>
                            <h1 className="video-texto1" style={{fontWeight: "100"}}> Conectamos <span style={{fontWeight: "bold"}}> Proyectos </span></h1>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <div className="video-container">
                            <video className="d-block w-100" autoPlay loop muted>
                                <source src={VideoPortada2} type="video/mp4" />
                            </video>    
                            <div className="video-texto2 d-flex flex-column justify-content-start align-items-start">
                                <h1 style={{fontWeight: "bold", fontSize: "30px"}}> ¡Somos la única Telco en Perú <span style={{fontWeight: "100"}}> que integra alta disponibilidad en Internet & Cyberseguridad! </span></h1>
                                <p className='m-0 mt-2 mb-4'> Ofrecemos soluciones integrales que combinan conectividad de alta disponibilidad y ciberseguridad avanzada, garantizando la continuidad y protección de tu negocio. </p>
                                <BotonAnimado 
                                colorIconoBase = "#05AFA5"
                                colorLetraBase= "white"
                                colorBordeBase = "white"
                                colorIconoPress = "#14B4AA"
                                fondoTextoPress = "white"
                                colorLetraPress = "black"
                                nav="/contacto"
                            />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <div className="video-container">
                            <video className="d-block w-100 " autoPlay loop muted>
                                <source src={VideoPortada3} type="video/mp4" />
                            </video>
                            <div className="video-texto3 d-flex flex-column justify-content-start align-items-start">
                                <h1 style={{fontWeight: "bold", fontSize: "60px"}}> Descubre <span style={{fontWeight: "100"}}> Nuestros Servicios </span></h1>
                                <p className='m-0 mt-2 mb-4'> Descubre nuestras soluciones diseñadas para optimizar y potenciar el crecimiento de tu empresa con servicios de alta calidad. </p>
                                <BotonAnimado 
                                colorIconoBase = "white"
                                colorLetraBase= "white"
                                colorBordeBase = "white"
                                colorIconoPress = "#14B4AA"
                                fondoTextoPress = "white"
                                colorLetraPress = "black"
                                nav="/contacto"
                            />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                    <div className="video-container">
                        <video className="d-block w-100 " autoPlay loop muted>
                            <source src={VideoPortada4} type="video/mp4" />
                        </video>
                        <div className="video-texto4 d-flex flex-column justify-content-start align-items-start">
                                <h1 style={{fontWeight: "100", fontSize: "50px"}}> Contamos con <span style={{fontWeight: "bold"}}> SOC & NOC </span> <span style={{fontWeight: "100"}}> propios </span></h1>
                                <p className='m-0 mt-2 mb-4'> Garantizamos monitoreo proactivo y soporte especializado 24/7 con personal certificado, tecnología avanzada y procesos eficientes para asegurar la continuidad y seguridad de tus operaciones. </p>
                                <BotonAnimado 
                                colorIconoBase = "white"
                                colorLetraBase= "white"
                                colorBordeBase = "white"
                                colorIconoPress = "#14B4AA"
                                fondoTextoPress = "white"
                                colorLetraPress = "black"
                                nav="/contacto"
                            />
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>    
            </section>
            <section data-aos="fade-right" style={{backgroundColor: "#3A4040", height: "auto", padding: "48px 150px", paddingBottom: "130px"}} className="container-fluid segunda-seccion-inicio">
                <div>
                    <h1 style={{fontSize: "80px", fontWeight: "700", color: "white"}}> Nuestros <span style={{fontWeight: "100"}}> Servicios </span> </h1>
                    <p style={{color: "white"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Impulsamos la innovación tecnológica a través de nuestro portafolio de soluciones para mejorar la productividad y competitividad de las empresas. </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '550px', marginTop: "40px", rowGap: "20px"}}>
                    <div style={{ display: 'flex', flex: 1 }}>
                        <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: "column",
                            gap: "6px",
                        }}
                        >
                        <Image onClick={() => navigate("/servicios/conectividad")} src={require("../../images/Nuestros servicios 1.png.png")} roundedCircle style={{ width: '244px', height: '245px',  cursor: "pointer"  }} className='img-serv'/>
                        <bold style={{color: "white"}}> <p style={{fontWeight: "700", width: "120px", textAlign: "center", fontFamily: "Red Hat Display"}}> Conectividad en empresas </p> </bold>
                        </div>
                        <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: "column",
                            gap: "6px"
                        }}
                        >
                        <Image onClick={() => navigate("/servicios/gestionados")} src={require("../../images/Nuestros servicios 2.png.png")} roundedCircle style={{ width: '244px', height: '245px',  cursor: "pointer"  }} className='img-serv' />
                        <strong style={{color: "white"}}> <p style={{fontWeight: "700", width: "120px", textAlign: "center", fontFamily: "Red Hat Display"}}> Servicios Gestionados </p> </strong>
                        </div>
                        <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: "column",
                            gap: "6px"
                        }}
                        >
                        <Image onClick={() => navigate("/servicios/telefonia")} src={require("../../images/Nuestros servicios 3.png.png")} roundedCircle style={{ width: '244px', height: '245px',  cursor: "pointer" }} className='img-serv'/>
                        <strong style={{color: "white"}}> <p style={{fontWeight: "700", width: "200px", textAlign: "center", fontFamily: "Red Hat Display"}}> Telefonia Corporativa y comunicaciones unificadas </p>  </strong>
                        </div>
                    </div>
                    <div className='sec' style={{ display: 'flex', flex: 1 }}>
                        <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                            flexDirection: "column",
                            gap: "6px",
                            marginRight: "180px"
                        }}
                        >
                        <Image onClick={() => navigate("/servicios/seguridad")} src={require("../../images/Nuestros servicios 4.png.png")} roundedCircle style={{ width: '244px', height: '245px', cursor: "pointer" }} className='img-serv'/>
                        <strong style={{color: "white", paddingRight: "12px", fontFamily: "Red Hat Display"}}> Ciberseguridad en empresas </strong>
                        </div>
                        <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'center',
                            flexDirection: "column",
                            gap: "6px"
                        }}
                        >
                        <Image onClick={() => navigate("/servicios/cloud")} src={require("../../images/Nuestros servicios 5.png.png")} roundedCircle style={{ width: '244px', height: '245px',  cursor: "pointer"  }} className='img-serv'/>
                        <strong style={{color: "white", paddingLeft: "65px", fontFamily: "Red Hat Display"}} > Servicios Cloud </strong>
                        </div>
                    </div>
                </div>
            </section>
            <section  data-aos="fade-right" style={{backgroundColor: "#FAFAFA", height: "auto", padding: "60px 0"}}>
                <div className="tercera-seccion-inicio row p-0 m-0 h-100">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center" >
                        <Image style={{width: "500px", height: "500px"}} src={ImagenInicio} rounded />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                        <h1 style={{fontWeight: "100", width: "350px"}}> Contamos con Nuestro Propio <h1 style={{fontWeight: "bold", width: "200px"}}> Centro de Atención </h1> </h1>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Cada vez que un cliente llama frente a una incidencia es atendido por un ingeniero certificado en networking y seguridad. </p>
                        
                        <BotonAnimado 
                            colorIconoBase = "#05AFA5"
                            colorLetraBase= "black"
                            colorBordeBase = "black"
                            colorIconoPress = "white"
                            fondoTextoPress = "black"
                            colorLetraPress = "white"
                            nav="/contacto"
                        />
                    </div>
                </div>
            </section>
            <section data-aos="fade-right" style={{backgroundColor: "#3A4040", minHeight: "auto",padding: "48px 150px"}}className="container-fluid cuarta-seccion-inicio">
                <div>
                    <h1 style={{ fontSize: "80px", fontWeight: "100", color: "white" }}>
                    Nuestros <span style={{ fontWeight: "700" }}> Partners </span>
                    </h1>
                    <p style={{ color: "white" }}>
                    <i style={{ color: "#1FB3AE" }} className="bi bi-play-fill"></i> Contamos
                    con alianzas estratégicas con los principales fabricantes de tecnología,
                    líderes en la transformación digital.
                    </p>
                </div>
                <div className="container contenedorPartners">
                    <Carousel controls={true} interval={1500} indicators={false} style={{marginTop: "250px"}}>
                        {imageChunks.map((chunk, index) => (
                            <Carousel.Item key={index}>
                                <div className="grid-container">
                                    {chunk.map((src, idx) => (
                                        <div key={idx} className="grid-item">
                                            <img src={src} alt={`Imagen ${idx + 1}`} className="float-fluid" />
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </section>
            
            {/* <ComponentePartners /> */}
        </>
    )
}

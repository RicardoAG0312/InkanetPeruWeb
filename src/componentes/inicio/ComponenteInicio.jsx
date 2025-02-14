import React from 'react';
import "./inicio.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import {ComponenteBarraNavegacion} from "../../routers/routers"
import VideoPortada1 from "../../images/Portada 1.mp4"
import VideoPortada2 from "../../images/Portada 2.mp4"
import VideoPortada3 from "../../images/Portada 3.mp4"
import VideoPortada4 from "../../images/Portada 5.mp4"


export default function ComponenteInicio() {

    return (
        <>
            <section className='contenedorPrincipal'>
                <ComponenteBarraNavegacion />
                <Carousel className='carousel' data-bs-theme="dark" >
                    <Carousel.Item interval={2500}>
                        <video className="d-block w-100" autoPlay loop muted >
                            <source src={VideoPortada1} type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <video className="d-block w-100" autoPlay loop muted >
                            <source src={VideoPortada2} type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <video className="d-block w-100" autoPlay loop muted >
                            <source src={VideoPortada3} type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <video className="d-block w-100" autoPlay loop muted >
                            <source src={VideoPortada4} type="video/mp4" />
                        </video>
                    </Carousel.Item>
                </Carousel>    
            </section>
            <section style={{backgroundColor: "#3A4040", height: "auto", padding: "48px 150px", paddingBottom: "130px"}} className="container-fluid">
                <div>
                    <h1 style={{fontSize: "80px", fontWeight: "700", color: "white"}}> Nuestros <span style={{fontWeight: "100"}}> Servicios </span> </h1>
                    <p style={{color: "white"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Impulsamos la innovación tecnológica a través de nuestro portafolio de soluciones para mejorar la productividad y competitividad de las empresas. </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '550px', marginTop: "40px"}}>
                    <div style={{ display: 'flex', flex: 1 }}>
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
                        <Image src={require("../../images/Nuestros servicios 1.png")} roundedCircle style={{ width: '244px', height: '245px' }} />
                        <bold style={{color: "white"}}> <p style={{fontWeight: "700", width: "120px", textAlign: "center"}}> Conectividad en empresas </p> </bold>
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
                        <Image src={require("../../images/Nuestros servicios 2.png")} roundedCircle style={{ width: '244px', height: '245px' }} />
                        <strong style={{color: "white"}}> <p style={{fontWeight: "700", width: "120px", textAlign: "center"}}> Servicios Gestionados </p> </strong>
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
                        <Image src={require("../../images/Nuestros servicios 3.png")} roundedCircle style={{ width: '244px', height: '245px' }} />
                        <strong style={{color: "white"}}> <p style={{fontWeight: "700", width: "200px", textAlign: "center"}}> Telefonia Corporativa y comunicaciones unificadas </p>  </strong>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 1 }}>
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
                        <Image src={require("../../images/Nuestros servicios 4.png")} roundedCircle style={{ width: '244px', height: '245px' }} />
                        <strong style={{color: "white", paddingRight: "12px"}}> Ciberseguridad en empresas </strong>
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
                        <Image src={require("../../images/Nuestros servicios 5.png")} roundedCircle style={{ width: '244px', height: '245px' }} />
                        <strong style={{color: "white", paddingLeft: "65px"}} > Servicios Cloud </strong>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{backgroundColor: "#FAFAFA", height: "600px"}}>
                <div className="row p-0 m-0 h-100">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center" >
                        <Image style={{width: "500px", height: "500px"}} src={require("../../images/Diseño sin título(1).png")} rounded />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                        <h1 style={{fontWeight: "100", width: "350px"}}> Contamos con Nuestro Propio <h1 style={{fontWeight: "bolder", width: "180px"}}> Centro de Atención </h1> </h1>
                        <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Cada vez que un cliente llama frente a una incidencia es atendido por un ingeniero certificado en networking y seguridad. </p>
                    </div>
                </div>
            </section>
        </>
    )
}

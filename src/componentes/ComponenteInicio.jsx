import React, {useState, useEffect} from 'react'
import "../estilos/ComponenteInicio.css";
import videoSrc from '../images/InkaPresentacion.mp4';
import {ComponentePartners} from "./ComponenteSoluciones";
import Imagen66 from "../images/66.png";
import Imagen6 from "../images/6.png";
import Imagen7 from "../images/7.png";
import Imagen8 from "../images/8.png";
import TituloImagen from "../images/24.png";
//import { Carousel } from 'react-bootstrap';
const secciones = [
    {
        titulo: "FELICES FIESTAS PATRIAS ",
        texto: "Inkanet desea en este mes de julio felices fiestas Patrias a nuestros valiosos colaboradores y partners, así como a nuestros apreciados clientes. Agradecemos su continuo apoyo y confianza en nuestros servicios.",
        imagen: Imagen66,
        alt: "Imagen",
        fondo: 'imagen-uno',
        textoBoton: "¡Viva el Perú!",
        colorBoton: "color-boton-peru",
        tituloImagen: TituloImagen,
        tituloImagenAlt: "Bandera de Perú",
        href: "./Presentación_INKANET_2023[1].pdf",
        isDownload: true
        },
        {
        titulo: "SEGURIDAD GESTIONADA",
        texto: "Nuestro servicio de soporte ofrece todas las capacidades y experiencia de resolución de incidentes con una operación 24 x 7 x 365, a través de niveles de atención y especialización.",
        imagen: Imagen6,
        alt: "Imagen",
        fondo: 'imagen-dos',
        textoBoton: "Información",
        colorBoton: "color-boton-info",
        tituloImagen: null,
        tituloImagenAlt: null,
        href: "./Presentación_INKANET_2023[1].pdf",
        isDownload: true
        },
        {
        titulo: "TRANSPORTE DE DATOS",
        texto: "Planificar y ejecutar proyectos de soluciones en Ciberseguridad, Redes y Comunicaciones y Data Center, usando estándares internacionales como PMI, ITIL, cumpliendo las expectativas de los clientes.",
        imagen: Imagen7,
        alt: "Imagen",
        fondo: 'imagen-tres',
        textoBoton: "Información",
        colorBoton: "color-boton-info",
        tituloImagen: null,
        tituloImagenAlt: null,
        href: "./Presentación_INKANET_2023[1].pdf",
        isDownload: true
        },
        {
        titulo: "INTERNET EMPRESARIAL",
        texto: "Brindamos servicio gestionado de diversas soluciones de nuestro portafolio con la capacidad de operación y soporte con el propósito de atender las diferentes necesidades de administración y gestión de todos los recursos.",
        imagen: Imagen8,
        alt: "Imagen",
        fondo: 'imagen-cuatro',
        textoBoton: "Información",
        colorBoton: "color-boton-info",
        tituloImagen: null,
        tituloImagenAlt: null,
        href: "./Presentación_INKANET_2023[1].pdf",
        isDownload: true
        }
    ];

function ComponentesServiciosInicio ({clase, titulo, texto, imagen, alt, href}) {
    return (
        <div className={`col-12 col-md-4 col-xl-4 ${clase}`}>
            <div className="icono">
                <img src={require(`../images/${imagen}.png`)} alt={alt} />
            </div>
            <div>
                <h3> {titulo} </h3>
                <p className="texto"> {texto} </p>
            </div>
            <button>
                <a href={href}> INFORMACIÓN </a>
            </button>
        </div>
    )
}


function Carrusel(){
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setContador(prevContador => (prevContador + 1) % secciones.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const seccion = secciones[contador];
    
    return(
        <section className="container-fluid sect-principal">
            <div className={`row ${seccion.fondo}`}>
                <div className="col-12 col-sm-12 col-xl-6 caja">
                    <div className="header-container">
                        <header>
                            {seccion.titulo}
                            {seccion.tituloImagen && (
                                <img src={seccion.tituloImagen} alt={seccion.tituloImagenAlt} className="img-titulo" />
                            )}
                        </header>
                    </div>
                    <p>{seccion.texto}</p>
                    {seccion.isDownload ? (
                        <a href={seccion.href} download="Presentación-Inkanet.pdf" className={seccion.colorBoton} style={{ display: 'inline-block', zIndex: 10 }}>
                            {seccion.textoBoton}
                        </a>
                    ) : (
                        <a href={seccion.href} className={seccion.colorBoton} style={{ display: 'inline-block', zIndex: 10 }}>
                            {seccion.textoBoton}
                        </a>
                    )}
                </div>
                <div className="col-12 col-sm-0 col-xl-6 imagen">
                    <img src={seccion.imagen} alt={seccion.alt} className="img-fluid" />
                </div>
                <div className="col-12 indicadores">
                    {secciones.map((_, index) => (
                        <span
                            key={index}
                            className={`circulo ${index === contador ? 'seleccionado' : ''}`}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ComponenteInicio() {
    return (
        <>     
            <section >
                <Carrusel/>
            </section>
            <section className="container contenedor-video">
                <video src={videoSrc} type="video/mp4" controls />
            </section>
            <header className="container-fluid tituloServicos">
                <h4> NUESTROS SERVICIOS  </h4>
                <p>
                    Nuestros servicios de ciberseguridad y TI son altamente seguras y tienen un historial comprobado de confiabilidad.
                </p>
            </header>
            <section className="container-fluid sect-servicios">
                <div className="row d-flex justify-content-center align-items-center">
                    <ComponentesServiciosInicio 
                        clase = "internet"
                        titulo = "Internet Dedicado 2.0"
                        texto = "Internet 2.0 es la evolución de la red mundial, implementando herramientas automatizadas para monitorear y defender las aplicaciones y datos en tiempo real."
                        imagen = "10"
                        alt = "ImagenInternet"
                        href = "/soluciones/internet"
                    />
                    <ComponentesServiciosInicio 
                        clase = "ciberseguridad"
                        titulo = "Ciberseguridad"
                        texto = "La ciberseguridad es esencial en el mundo digital actual. Proteger la información y los sistemas de posibles amenazas, ataques y vulnerabilidades es una prioridad para las organizaciones y los individuos."
                        imagen = "11-cuadrado"
                        alt = "ImagenCiberseguridad"
                        href = "/soluciones/ciberseguridad"
                    />
                    <ComponentesServiciosInicio 
                        clase = "telefonia"
                        titulo = "Telefonía IP"
                        texto = "La Telefonía IP, también conocida como VoIP (Voz sobre Protocolo de Internet), es una tecnología que permite la transmisión de llamadas de voz a través de redes de datos basadas en IP, como Internet."
                        imagen = "12"
                        alt = "ImagenTelefonia"
                        href = "/soluciones/telefonia"
                    />
                </div>
            </section>
            <ComponentePartners/>
        </>
    )
}

export default ComponenteInicio;

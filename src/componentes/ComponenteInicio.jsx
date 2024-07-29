import React from 'react'
import "../estilos/ComponenteInicio.css";
import videoSrc from '../images/InkaPresentacion.mp4';
import {ComponentePartners} from "./ComponenteSoluciones";

function ComponentesServiciosInicio ({clase, titulo, texto, imagen, alt}) {
    return (
        <div class={`col-12 col-md-4 col-xl-4 ${clase}`}>
            <div class="icono">
                <img src={require(`../images/${imagen}.png`)} alt={alt} />
            </div>
            <div>
                <h3> {titulo} </h3>
                <p class="texto"> {texto} </p>
            </div>
            <button>
                <a href="./indexSoluciones/internet/internet.html"> INFORMACIÓN </a>
            </button>
        </div>
    )
}

function ComponenteInicio() {
    return (
        <>     
            <section className="container contenedor-video">
                <video src={videoSrc} type="video/mp4" controls />
            </section>
            <header class="container-fluid tituloServicos">
                <h4> NUESTROS SERVICIOS  </h4>
                <p>
                    Nuestros servicios de ciberseguridad y TI son altamente seguras y tienen un historial comprobado de confiabilidad.
                </p>
            </header>
            <section class="container-fluid sect-servicios">
                <div class="row d-flex justify-content-center align-items-center">
                    <ComponentesServiciosInicio 
                        clase = "internet"
                        titulo = "Internet Dedicado 2.0"
                        texto = "Internet 2.0 es la evolución de la red mundial, implementando herramientas automatizadas para monitorear y defender las aplicaciones y datos en tiempo real."
                        imagen = "10"
                        alt = "ImagenInternet"
                    />
                    <ComponentesServiciosInicio 
                        clase = "ciberseguridad"
                        titulo = "Ciberseguridad"
                        texto = "La ciberseguridad es esencial en el mundo digital actual. Proteger la información y los sistemas de posibles amenazas, ataques y vulnerabilidades es una prioridad para las organizaciones y los individuos."
                        imagen = "11-cuadrado"
                        alt = "ImagenCiberseguridad"
                    />
                    <ComponentesServiciosInicio 
                        clase = "telefonia"
                        titulo = "Telefonía IP"
                        texto = "La Telefonía IP, también conocida como VoIP (Voz sobre Protocolo de Internet), es una tecnología que permite la transmisión de llamadas de voz a través de redes de datos basadas en IP, como Internet."
                        imagen = "12"
                        alt = "ImagenTelefonia"
                    />
                </div>
            </section>
            <ComponentePartners/>
        </>
    )
}

export default ComponenteInicio;

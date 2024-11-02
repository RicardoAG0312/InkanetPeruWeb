import React, { useState, useEffect } from 'react';
import "../estilos/ComponenteSoluciones.css";
import {ComponenteModalPrincipalFondo} from './ComponenteNosotros';
import Barracuda from '../images/Barracuda.png';
import CheckPoint from '../images/CheckPoint.png';
import Cisco from '../images/Cisco.png';
import Dell from '../images/Dell.png';
import ForcePoint from '../images/ForcePoint.png';
import Fortinet from '../images/Fortinet.png';
import GFISoftware from '../images/GFISoftware.png';
import Hillstone from '../images/Hillstone.png';
import Kaspersky from '../images/Kaspersky.png';
import Nessus from '../images/Nessus.png';
import NetWorks from '../images/NetWorks.png';
import PaloAlto from '../images/PaloAlto.png';
import Sophos from '../images/Sophos.png';

const imagenes = [
    Barracuda, CheckPoint, Cisco, Dell, ForcePoint, Fortinet, GFISoftware, Hillstone, Kaspersky, Nessus, NetWorks, PaloAlto, Sophos
];

export function ComponentePartners() {
    const [indice, setIndice] = useState(0);
        useEffect(() => {
        const interval = setInterval(() => {
            setIndice((indice + 1) % (imagenes.length - 3));
        }, 3000);
        return () => clearInterval(interval);
    }, [indice]);
    return (
        <section className="container-fluid sect-ter">
            <div className="titulo">
            <h1> NUESTROS ALIADOS: </h1>
            </div>
            <div id="carouselExample" className="carousel slide container-fluid" data-bs-ride="carousel">
            <div className="carousel-inner" id="Partners">
                <div className="carousel-item active">
                <div className="row contenedor-carusel" id="carusel">
                    {imagenes.slice(indice, indice + 4).map((imagen, index) => (
                    <div key={index} className="col col-carusel">
                        <img src={imagen} className="d-inline-block" alt="Partner" />
                    </div>
                    ))}
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={() => setIndice((indice - 1 + (imagenes.length - 3)) % (imagenes.length - 3))}>
                <span className="carousel-control-prev-icon" aria-hidden="true" id="flecha-izq"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => setIndice((indice + 1) % (imagenes.length - 3))}>
                <span className="carousel-control-next-icon" aria-hidden="true" id="flecha-der"></span>
            </button>
            </div>
        </section>
    );
}


function ComponenteListadoSoluciones ({clase, titulo, textos, id}) {
    return (
        <section className={`container-fluid ${clase}`} id={id}>
            <header> {titulo} </header>
            <div className="row">
                <div className="col-12 col-sm-7 texto">
                    <ul>
                        {textos.map((texto, index) => 
                            <li key={index}> {texto} </li>
                        )}
                    </ul>
                </div>
                <div className="col-12 col-sm-4 img">
                    
                </div>
            </div>
        </section>
    )
}



export function ComponenteSolucionesInternet() {
    return (
        <>
            <ComponenteModalPrincipalFondo 
                clase = "seccionInternet"
                titulo = "INTERNET 2.0"
                texto = "Internet 2.0 es la evolución de la red mundial, implementando herramientas automatizadas para monitorear y defender las aplicaciones y datos en tiempo real. Utiliza la Inteligencia Artificial para prever y mitigar amenazas cibernéticas avanzadas, asegurando la privacidad del usuario garantizado que los datos personales están protegidos y cumplen con las regulaciones."
                enlace = "#Internet"
                imagenPrincipal = "61"
            />
            <ComponenteListadoSoluciones 
                clase = "sect-secc"
                titulo = "CARACTERÍSTICAS DE INTERNET 2.0"
                id = "Internet"
                textos = {[
                    "Implementar herramientas automatizadas para monitorear y defender las aplicaciones y datos en tiempo real.",
                    "Utilizar la Inteligencia Artificial para prever y mitigar amenazas cibernéticas avanzadas.",
                    "Asegurar la privacidad del usuario garantizado que los datos personales están protegidos y cumplen con las regulaciones, como GDPR.",
                    "Fortalecer la seguridad en entornos de nube, dado que muchas aplicaciones 2.0 están basadas en la nube.",
                    "Implementar autenticación robusta y control de acceso para asegurar que solo los usuarios autorizados puedan acceder a las aplicaciones y datos.",
                    "Educar a los empleados y usuarios sobre los riesgos cibernéticos asociados con el uso de aplicaciones basadas en web."
                ]}
            />
            <section className="container-fluid sect-ter">
                <div>
                    <h1 className="titulo"> VENTAJAS </h1>
                    <div className="row contenedorInfo">
                        <div className="col-5 img">
                            <h2> VENTAJAS DE INTERNET 2.0: </h2>
                        </div>
                        <div className="col-12 col-sm-6 texto">
                            <ul>
                                <li> Contacto directo con el SOC 24 x 7. </li>
                                <li> Monitoreo constante de las soluciones y de la red. Capacitaciones constantes al personal de la administración de los equipos. </li>
                                <li> Personal especializado en el SOC. </li>
                                <li> NOC, más completo con herramientas de Monitoreo, siendo este ya un (CRR) Centro de control de red. </li>
                                <li> Cobertura en todo el territorio Peruano. </li>
                                <li> Cuadrillas personalizadas para nuestro servicio. </li>
                                <li> Reportes personalizados en coordinación con el cliente. </li>
                                <li> Pertenecer al CisoGob. </li>
                                <li> Ingreso a los portales de las diferentes soluciones de seguridad y redes. </li>
                                <li> Ingreso a eventos exclusivos de marcas. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <ComponentePartners />
        </>
    )
}
// hola
export function ComponenteSolucionesCiberseguridad() {
    return (
        <>
            <ComponenteModalPrincipalFondo 
                clase = "seccionCiberseguridad"
                titulo = "CIBERSEGURIDAD"
                texto = "La ciberseguridad es esencial en el mundo digital actual. Proteger la información y los sistemas de posibles amenazas, ataques y vulnerabilidades es una prioridad para las organizaciones y los individuos. Aquí, exploramos las últimas tendencias en ciberseguridad, ofrecemos consejos para mejorar la seguridad y discutimos como la tecnología emergente puede influir en la seguridad de la información."
                enlace = "#Ciberseguridad"
                imagenPrincipal = "62"
            />
            <ComponenteListadoSoluciones 
                clase = "sectt-sec"
                titulo = "CARACTERÍSTICAS DE CIBERSEGURIDAD"
                id = "Ciberseguridad"
                textos = {[
                    "Identificar, evaluar y mitigar los riesgos cibernéticos a los que se enfrenta la organización.",
                    "Implementar múltiples capas de seguridad para proteger los sistemas y datos de la organización.",
                    "Tener un plan de respuesta a incidentes bien definido y practicado regularmente para manejar eficazmente cualquier brecha de seguridad.",
                    "Proporcionar formación regular a todos los empleados sobre las mejores prácticas de seguridad cibernética y mantenerlos informados sobre las últimas amenazas y ataques.",
                    "Asegurarse de que la organización cumple con todas las leyes y regulaciones pertinentes en materia de ciberseguridad.",
                    "Realizar evaluaciones de seguridad regulares y auditorias para Identificar y corregir cualquier vulnerabilidad en los sistemas de la organización."
                ]}
            />
            <ComponentePartners />
        </>
    )
}

export function ComponenteSolucionesTelefonia() {
    return (
        <>
            <ComponenteModalPrincipalFondo 
                clase = "seccionTelefonia"
                titulo = "TELEFONÍA IP"
                texto = "La Telefonía IP, también conocida como VoIP (voz sobre protocolo de internet), es una tecnología que permite la transmisión de llamadas de voz a través de redes de datos basadas en IP, como Internet. Esta tecnología ha revolucionado la forma en que las empresas y las personas se comunican, ofreciendo una serie de ventajas sobre la telefonía tradicional."
                enlace = "#Telefonia"
                imagenPrincipal = "63"
            />
            <ComponenteListadoSoluciones 
                clase = "ssect-sec"
                titulo = "CARACTERÍSTICAS DE TELEFONÍA IP"
                id = "Telefonia"
                textos = {[
                    "Implementar protocolos de seguridad como SRTP o ZRTP para cifrar las comunicaciones y proteger la integridad de las llamadas.",
                    "Utilizar mecanismos de autenticación fuertes para verificar la identidad de los usuarios antes de permitir el acceso a los servicios de Telefonía IP.",
                    "Implementar medidas para detectar y mitigar ataques DDoS, que pueden causar interrupciones en el servicio de Telefonía IP.",
                    "Realizar un monitoreo constante de las redes y sistemas para detectar cualquier actividad sospechosa o anormal.",
                    "Mantener los sistemas de Telefonía IP actualizados con los últimos parches de seguridad para protegerse contra vulnerabilidades conocidas.",
                    "Tener un plan de respuesta a incidentes bien definido para manejar cualquier brecha de seguridad de manera eficiente y minimizar el impacto."
                ]}
            />
            <ComponentePartners />
        </>
    )
}



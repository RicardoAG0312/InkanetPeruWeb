import React from 'react'
import "../estilos/ComponenteServicios.css";
import LogoInkanet from "../images/Recurso3.svg";
import {ComponenteModalPrincipalFondo} from './ComponenteNosotros';
import { NieveComponente } from "./NieveComponente";



function ComponenteViñetasServicios ({clase, titulo, texto}) {
    return (
        <div className={clase}>
            <div className="subfirewall">
                <h2> {titulo} </h2>
                <p className="texto"> {texto} </p>
            </div>
        </div>
    )
}

function ComponenteServicios() {
    return (
        <>  
            <NieveComponente />
            <ComponenteModalPrincipalFondo 
                clase = "seccionServicios"
                titulo = "SERVICIO TÉCNICO"
                texto = " En nuestra empresa, nos especializamos en proporcionar soluciones de ciberseguridad de vanguardia. Nuestros servicios están diseñados para proteger su infraestructura digital de manera integral."
                enlace = "#Servicio"
                imagenPrincipal = "60"
            />
            <section className="container-fluid sect-sec" id="Servicio">
                <header> BENEFICIOS DE NUESTRO SERVICIO </header>
                <div className="row">
                    <div className="col-12 col-sm-7 texto">
                        <p>
                            <span> En nuestra empresa, nos especializamos en proporcionar soluciones de ciberseguridad de vanguardia </span> Nuestros servicios están diseñados para proteger su infraestructura digital de manera integral. Ofrecemos soluciones personalizadas que incluyen la identificación y mitigación de vulnerabilidades, monitoreo en tiempo real, respuesta a incidentes y recuperación ante desastres.
                        </p>
                        <p>
                            Nos enfocamos en implementar estrategia proactiva para anticipar y contrarrestar amenazas, asegurando la integridad, confidencialidad y disponibilidad de sus datos e información crítica. Con nosotros, su ciberseguridad está en manos expertas.
                        </p>
                    </div>
                    <div className="col-12 col-sm-5 img">
                        
                    </div>
                </div>
            </section>
            <section className="container-fluid sect-ter" id="Caracteristicas">
                <div className="titulo">
                    <h2> CARACTERÍSTICAS DEL SERVICIO </h2>
                    <p> En Inkanet Perú, nos dedicamos a ofrecer soluciones de ciberseguridad de última generación para proteger a las empresas contra amenazas cibernéticas en constante evolución. Nuestro producto ha sido diseñado específicamente para ofrecer el más alto nivel de seguridad posible a su dispositivo. </p>
                </div>
                <div className="container sect-sub-ter">
                    <ComponenteViñetasServicios 
                        clase = "firewall"
                        titulo = "FIREWALL DE PRÓXIMA GENERACIÓN (NGFW)"
                        texto = "Ofrecemos una solución de Firewall de última generación diseñada para ofrecer una seguridad de red incomparable. Nuestro NGFW cuenta con características avanzadas como la inspección profunda de paquetes, descifrado de layer de sockets seguros (SSL) y sistemas de prevención de intrusos (IPS) de alto rendimiento."
                    />
                    <ComponenteViñetasServicios 
                        clase = "contenidoweb"
                        titulo = "PROTECCIÓN DE CONTENIDO WEB Y CORREO"
                        texto = "Nuestro servicio de Protección de Contenido reduce el riesgo de tráfico de red dañino a través de un estricto filtrado y monitoreo web. Además, nuestro servicio de Protección de Correo Electrónico garantiza que su información confidencial esté protegida contra ataques malintencionados y acceso no autorizado."
                    />
                    <ComponenteViñetasServicios 
                        clase = "aplicacionesweb"
                        titulo = "FIREWALL DE APLICACIONES WEB Y BASE DE DATOS"
                        texto = "Proporcionamos una protección integral para sus aplicaciones web y bases de datos. Al proteger contra una amplia gama de amenazas cibernéticas, estas medidas de seguridad garantizan la confidencialidad, integridad y disponibilidad de sus datos y aplicaciones sensibles."
                    />
                    <ComponenteViñetasServicios 
                        clase = "endpoint"
                        titulo = "PROTECCIÓN ENDPOINT Y AMBIENTES VIRTUALES "
                        texto = "Es clave proteger los endpoints y entornos virtuales para la seguridad de la red de su organización. Implementamos medidas de seguridad para protegerse de amenazas y vulnerabilidades. Estas soluciones incluyen la identificación de posibles riesgos."
                    />
                </div>
            </section>
            <section className="container-fluid sect-cuartaa">
                <div className="row">
                    <div className="col-12 col-sm-8 info">
                        <h1> ¿POR QUÉ INKANET? </h1>
                        <p> Inkanet es una empresa líder en el campo de las telecomunicaciones en Perú, dedicada a proporcionar soluciones de fibra óptica de alta calidad para garantizar una conexión estable y segura. Nos enorgullece ofrecer una gama de servicios avanzados, desde Internet de alta velocidad hasta soluciones de ciberseguridad y telefonía IP.</p>
                        <p>Nuestro compromiso con la excelencia y la satisfacción del cliente nos distingue en el campo de las telecomunicaciones. Al elegir Inkanet, está eligiendo un servicio confiable, eficiente y dedicado a satisfacer sus necesidades de telecomunicaciones.</p>
                        <p>Nuestros servicios de Internet de alta velocidad están diseñados para mantener su negocio en línea y funcionando sin problemas, con una conexión estable y segura que puede manejar las demandas de la era digital.</p>
                        <p>Nuestras soluciones de ciberseguridad están diseñadas para proteger su infraestructura digital de amenazas y vulnerabilidades. Utilizamos las últimas tecnologías y técnicas para identificar y mitigar riesgos, asegurando que sus datos e información crítica estén seguros.</p>
                        <p>Además, ofrecemos servicios de telefonía IP, proporcionando una solución de comunicación flexible y rentable que puede adaptarse a las necesidades de su negocio. En Inkanet, entendemos que cada negocio es único, y por eso ofrecemos soluciones personalizadas que se adaptan a sus necesidades específicas.</p>
                        <p>Trabajamos con usted para entender su negocio y su industria, permitiéndonos proporcionar un servicio que se ajusta a sus necesidades. Con Inkanet, puede estar seguro de que está en buenas manos. Nuestro equipo de expertos está dedicado a proporcionar un servicio excepcional, y estamos aquí para apoyarlo en cada paso del camino. Elija Inkanet para sus necesidades de telecomunicaciones, y descubra la diferencia que puede hacer un servicio de calidad.</p>
                    </div>
                    <div className="col-12 col-sm-4 imagenes">
                        <div>
                            <img src={LogoInkanet} alt="Imagen" />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteServicios;

import React from 'react'
import LogoInkanet from "../images/Recurso3.svg";
import "../estilos/ComponenteNosotros.css";

export function ComponenteModalPrincipalFondo ({titulo, texto, enlace, imagenPrincipal, clase}) {
    return (
        <section className={`container-fluid sect-pri ${clase}`}>
            <div className="row m-0">
                <div className="col-6 texto">
                    <div className="header-container">
                        <header> {titulo} </header>
                        <img id="titulo-imagen" src={require(`../images/24.png`)} alt="Imagen" class="img-titulo" />
                    </div>
                    <p>
                        {texto}
                    </p>
                    <button>
                        <a href={enlace}> Información </a>
                    </button>
                </div>
                <div className="col img">
                    <img src={require(`../images/${imagenPrincipal}.png`)} alt="Imagen" />
                </div>
            </div>
        </section>
    )
}

function ComponenteEstadisticas ({icono, texto}) {
    return (
        <div className="col-10 col-xl-4 sect-col-firts">
            <div className="col-4 icono">
                <i className={`bi ${icono}`}></i>
            </div>
            <div className="col-8 texto">
                {texto}
            </div>
        </div>
    )
}

function ComponentePrincipios ({titulo, texto, imagen}) {
    return (
        <div class="card m-2">
            <img src={require(`../images/${imagen}.png`)} class="card-img-top" alt="Imagen" />
            <div class="card-body">
                <p class="card-text">
                    {texto}
                </p>
            </div>
            <div class="overlay">
                <p> {titulo} </p>
            </div>
        </div>
    )
}

export function ComponenteNosotros() {
    return (
        <>
            <ComponenteModalPrincipalFondo 
                clase = "seccionNosotros"
                titulo = "SOMOS INKANET"
                texto = "Inkanet Perú S.A.C. es una empresa 100% de capital peruano, actualmente es una empresa de ciberseguridad con reconocimientos de las mejores marcas y personal calificado para la atención de las mismas."
                enlace = "#Historia"
                imagenPrincipal = "65"
            />
            <section className="container-fluid sect-cuarta">
                <div className="header-container">
                    <h1> NUESTRA HISTORIA </h1>
                    <img id="titulo-imagen" src={require("../images/24.png")} alt="" className="img-titulo" />
                </div>
                <div className="row" id="Historia">
                    <div className="col-6 info">
                        <p>Inkanet Perú S.A.C. es una empresa 100% de capital peruano, actualmente es una empresa de ciberseguridad con reconocimiento de las mejores marcas y personal calificado para la atención de las mismas.</p>
                        <p>Inkanet Perú viene brindando servicios para diferentes entidades de gobierno y privado a nivel nacional, teniendo así una gran cartera de clientes y experiencia en despliegues masivos de las soluciones de protección al usuario final.</p>
                        <p>Es ahí donde encuentra la necesidad de no solo ser una empresa que da servicios de ciberseguridad, sino también de ofrecer servicios personalizados y acordes a la necesidad del cliente. Seguro y de rápida respuesta ante cualquier incidente.</p>
                        <p>Actualmente, Inkanet Perú cuenta ya con clientes que han confiado en esta nueva era de ciberseguridad, donde no solo será una venta sino una experiencia en servicio y atención, donde el cliente tendrá toda la asesoría y seguimiento de sus puntos críticos en ciberseguridad.</p>
                    </div>
                    <div className="col-6 imagenes">

                    </div>
                </div>
            </section>
            <section className="container-fluid sect-quinta">
                <div className="row">
                    <div className="col-4 imagenes">
                        <div>
                
                        </div>
                        <div>
                            <img src={LogoInkanet} alt="Imagen" />
                        </div>
                    </div>
                    <div className="col-8 info">
                        <h1> NUESTRO PROPÓSITO </h1>
                        <p>Nuestro propósito es empoderar a las organizaciones para que prosperen en la era digital con total confianza y resiliencia. Nos dedicamos a crear un entorno cibernético, seguro y protegido, donde las empresas pueden aprovechar al máximo las oportunidades tecnológicas sin temor a las amenazas. Nuestra meta es ser un aliado confiable en ciberseguridad, proporcionando soluciones de vanguardia que se adaptan a las necesidades cambiantes del panorama digital.</p>
                        <h3> Misión: </h3>
                        <p>Nuestra misión es salvaguardar el mundo digital. Nos esforzamos por proteger y asegurar las redes y sistemas de nuestros clientes contra amenazas cibernéticas, permitiéndoles operar con la máxima eficiencia y tranquilidad. Nuestro objetivo es anticiparnos a los desafíos de seguridad emergentes y proporcionar soluciones proactivas, innovadoras y personalizadas. Estamos comprometidos con la excelencia en la ciberseguridad, poniendo a nuestros clientes en el centro de todo lo que hacemos.</p>
                        <h3> Visión: </h3>
                        <p>Nuestro compromiso inquebrantable es proporcionar una experiencia optimizada tanto para los administradores de redes como para sus usuarios. Centramos todas nuestras acciones en nuestros clientes, los arquitectos y operadores de redes, para garantizar que sus usuarios finales.</p>
                    </div>
                </div>
            </section>
            <section class="container-fluid sect-es">
                <div class="row sect-firts">
                    <ComponenteEstadisticas 
                        icono = "bi-people-fill"
                        texto = "Taza Global de Clientes: 100"
                    />
                    <ComponenteEstadisticas 
                        icono = "bi-currency-exchange"
                        texto = "Facturación de 2024: $500.000"
                    />
                    <ComponenteEstadisticas 
                        icono = "bi-gear-wide-connected"
                        texto = "Cantidad de Productos de Ciberseguridad empresarial: 23"
                    />
                </div>
            </section>
            <section class="container-fluid seccion-principios">
                <header class="titulo-an">
                    Nuestros Principios 
                </header>
                <div class="container-fluid caja d-flex justify-content-around align-content-center align-items-center">
                    <ComponentePrincipios 
                        titulo = "CONFIDENCIALIDAD"
                        texto = "La confidencialidad es esencial para nosotros. Protegemos su información con sistemas de seguridad de vanguardia."
                        imagen = "2"
                    />
                    <ComponentePrincipios 
                        titulo = "INTEGRIDAD"
                        texto = "Nos esforzamos por mantener la integridad de sus datos. Puede confiar en la precisión y fiabilidad de la información que manejamos."
                        imagen = "3"
                    />
                    <ComponentePrincipios 
                        titulo = "DISPONIBILIDAD"
                        texto = "Nuestros servicios están diseñados para estar siempre disponibles. Puede acceder a sus datos cuando los necesite."
                        imagen = "4"
                    />
                    <ComponentePrincipios 
                        titulo = "AUTENTICIDAD"
                        texto = "Nos aseguramos de que toda la información que manejamos sea auténtica y verificable. Puede confiar en la autenticidad de sus datos."
                        imagen = "5"
                    />
                </div>
            </section>
        </>
    )
}


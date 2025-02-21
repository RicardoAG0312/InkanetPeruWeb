import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers";
import HeaderForm from '../../ui/HeaderForm';
import "./scirt.css"
import Help from '../../ui/Help';



function ComponenteScirt() {
    return (
        <>
            <section className="container-fluid p-0 scirt-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    titulo = "INKANET CSIRT"
                    texto1 = "Somos miembros acreditados de FIRST para brindar soluciones efectivas y oportunas a tus incidentes de ciberseguridad."
                    texto2 = ""
                    form = {false}
                />
            </section>
            <section className="container-fluid bg-white p-0" style={{height: "auto"}}>
                <div className="p-5 m-0 row h-100 w-100">
                    <div className="p-4 col-md-6 col-12">
                        <p>
                            En Inkanet CSIRT, protegemos tu futuro digital. <strong>Nuestra misión es fortalecer activamente la resiliencia cibernética de nuestros clientes, tanto internos como externos.</strong> Trabajamos incansablemente para reducir los riesgos de ciberseguridad, implementando medidas preventivas y proporcionando herramientas de detección temprana que brindan tranquilidad y confianza en un mundo digital en constante evolución.
                        </p>
                        <h1 className="mt-5 fw-bold">Nuestros Objetivos</h1>
                        <p>
                            <span className="text-primary">Enfoque proactivo,</span> colaboramos contigo para reforzar tus capacidades de detección temprana, minimizando las amenazas potenciales. 
                        </p>
                        <p>
                            <span className="text-primary">Respuesta rápida,</span> estamos a tu lado para dar una respuesta rápida y eficaz ante los incidentes que amenazan la operación de tu negocio. 
                        </p>
                        <p>
                            <span className="text-primary">Recuperación ágil,</span> apoyamos a la recuperación de tus operaciones de manera oportuna permitiéndote lograr tus metas empresariales en seguridad de la información y continuidad de negocio.
                        </p>
                    </div>
                    <div className="p-4 col-md-6 col-12">
                    </div>
                </div>
            </section>
            <section className="p-5 protect text-white position-relative d-flex align-items-center ">
                <div className="position-relative z-2 w-100 px-3 px-sm-4 px-md-5">
                    <h2 className=" fs-sm-4 fs-md-3 fs-lg-2 fw-semibold">
                        Descubre cómo Inkanet - CSIRT puede fortalecer la seguridad de tu empresa y prepararte para enfrentar los desafíos cibernéticos en constante evolución.
                    </h2>
                    <h2  className="fs-sm-4 fs-md-3 fs-lg-2 fw-semibold mt-3 text-primary">
                        Protege tu negocio con inteligencia y experiencia.
                    </h2>
                </div>
            </section>
            <Help />
        </>
    )
}

export default ComponenteScirt

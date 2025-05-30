import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers"
import HeaderForm from '../../ui/HeaderForm'
import Group from "../../../images/group.png";
import AnimatedSection from '../../AnimatedSection';
import "./trabaja.css";

function ComponenteTrabaja() {
    return (
        <>
            <section className='container-fluid p-0 trabaja-section'>
                <ComponenteBarraNavegacion />
                <HeaderForm
                    titulo = "Trabaja con Nosotros"
                    texto1 = "En Inkanet estamos comprometidos con la innovación y el desarrollo de talento. Buscamos personas apasionadas, creativas y con ganas de crecer en un entorno dinámico, donde la tecnología y la ciberseguridad son el motor para transformar el futuro."
                />
            </section>
            <section className="forma-parte container p-5 mt-5 mb-5" style={{height: "auto"}}>
                <div className="row">
                    <AnimatedSection as="div" direction="bottom" className="col-md-6">
                        <h1 style={{fontSize: "50px"}}><span style={{fontWeight: "bold"}}>Forma parte de nuestro equipo</span> <span>si cumples con este perfil</span></h1>
                        <ul style={{marginLeft: "-10px", marginTop: "20px", fontSize: "20px"}}>
                            <li>Proactivo e innovador</li>
                            <li>Orientado al servicio al cliente</li>
                            <li>Enfocado al trabajo en equipo</li>
                            <li>Exigente</li>
                        </ul>
                    </AnimatedSection>
                    <AnimatedSection as="div" direction="right" className="col-md-6 d-flex align-item-center justify-content-center">
                        <img src={Group} alt="Descripción de la imagen" className="img-fluid" style={{width:"", height:"400px"}}/>
                    </AnimatedSection>
                </div>
            </section>
            <section className='container-fluid seccion-cv p-5'>
                <div className='row w-100 '>
                    <AnimatedSection as="div" direction="right" className="col-md-6 p-5" style={{marginLeft: "50px", color: "white"}}>
                        <h1 style={{textShadow: "-5px 5px 5px rgba(0, 0, 0, 0.5)"}}>Si estás interesado en integrarte a Inkanet, envíanos tu CV al e-mail:</h1>
                        <button className="btn btn-light mt-3 mb-3" style={{borderRadius: "50px", minWidth: "100%"}}><h3 style={{color: "#09AEAF", margin: "0px"}}>rrhh@inkanetperu.com</h3></button>
                        <div>
                            <p style={{fontSize: "18px"}}>En el asunto indícanos las áreas de tu interés, o completa el formulario a continuación. Apenas dispongamos de una vacante acorde a lo que buscas te contactaremos. Para mayor información sobre ofertas laborales visita nuestro perfil.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            <section className='form-trabajo container p-5'>
                <AnimatedSection as="div" direction="bottom"  className='ms-5'>
                    <h1 style={{fontSize: "60px", fontWeight: "bold"}}> Contacta a un <span style={{fontWeight: "100"}}> <br/>experto </span></h1>
                </AnimatedSection>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12"  style={{backgroundColor: "#FFFFFF", color: "black"}}>
                        <AnimatedSection as="div" direction="bottom" className='mb-5 mt-3'>
                            <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Llena tus datos y nos comunicaremos contigo. </p>
                        </AnimatedSection>
                        <div  style={{maxWidth: "400px"}}>
                            <form action="https://formsubmit.co/1a034701971cea3895ef10689c27aae8" method="POST" encType="multipart/form-data">
                                <AnimatedSection as="div" direction="right" className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Nombres' id="nombres" name="nombres" required />
                                </AnimatedSection>
                                <AnimatedSection as="div" direction="left" className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Apellidos' id="apellidos" name="apellidos" required  />
                                </AnimatedSection>
                                <AnimatedSection as="div" direction="right" className="row mb-3">
                                    <input type="email" className="form-control form-control-lg input-personalizado" placeholder='Email' id="email" name="email" required />
                                </AnimatedSection>
                                <AnimatedSection as="div" direction="left" className="row mb-3">
                                    <input type="number" className="form-control form-control-lg input-personalizado" placeholder='Telefono/Celular' id="number" name="number" required />
                                </AnimatedSection>
                                <AnimatedSection as="div" direction="right" className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Universidad/Instituto' id="estudios" name="estudios" required />
                                </AnimatedSection>
                                <AnimatedSection as="div" direction="left" className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Carrera' id="carrera" name="carrera" required />
                                </AnimatedSection>
                                <button
                                type="submit"
                                className="btn w-50"
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "50px",
                                    border: "none",
                                    transition: "background-color 0.3s",
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#05AFA5"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "black"}
                                >
                                Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex" style={{backgroundColor: "#1FB3AE", borderRadius: "50px", maxWidth: "400px"}}>
                        <AnimatedSection as="div" direction="right" className='d-flex flex-column justify-content-center align-items-start ' style={{color: "white", paddingTop: "50px", paddingBottom: "0px", paddingLeft: "20px", paddingRight: "20px"}}>
                            <h1 style={{color:"#000", fontSize:"50px"}}><span style={{fontWeight: "bold"}}>¡Te estamos</span> buscando!</h1>
                            <h2 style={{fontSize:"20px"}}>No solo conectamos cables, conectamos personas.</h2>
                            <p className='mt-3 mb-3'>En Inkanet ayudamos a las empresas en su evolución digital, para ello necesitamos talentos como tú.</p>
                            <h3>Conoce nuestras vacantes en el siguiente portal: <a style={{color: "#161616", textDecoration: "none"}} href="https://www.linkedin.com/company/inkanet-per%C3%BA/" target='_blank' rel='noreferrer'> Linkedin </a></h3>
                            <AnimatedSection as="div" direction="bottom" className='d-flex align-items-end mt-5'>
                                <p className=''>¡Te estamos esperando!</p>
                            </AnimatedSection>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteTrabaja

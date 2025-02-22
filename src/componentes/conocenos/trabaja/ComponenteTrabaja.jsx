import React from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers"
import HeaderForm from '../../ui/HeaderForm'
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
            <section className="container p-5 mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{fontSize: "50px"}}><span style={{fontWeight: "bold"}}>Forma parte de nuestro equipo</span> <span>si cumples con este perfil</span></h1>
                        <ul style={{marginLeft: "-10px", marginTop: "20px", fontSize: "20px"}}>
                            <li>Proactivo e innovador</li>
                            <li>Orientado al servicio al cliente</li>
                            <li>Enfocado al trabajo en equipo</li>
                            <li>Exigente</li>
                        </ul>
                    </div>
                    <div className="col-md-6 bg-info">
                    {/* <img src={imagenEjemplo} alt="Descripción de la imagen" className="img-fluid" /> */}
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-cv p-5'>
                <div className='row'>
                    <div className="col-md-6 p-5" style={{marginLeft: "50px", color: "white"}}>
                        <h1 style={{textShadow: "-5px 5px 5px rgba(0, 0, 0, 0.5)"}}>Si estás interesado en integrarte a Inkanet, envíanos tu CV al e-mail:</h1>
                        <button className="btn btn-light mt-3 mb-3" style={{borderRadius: "50px", width: "100%"}}><h3 style={{color: "#09AEAF"}}>administración@inkanetperu.com</h3></button>
                        <div>
                            <p style={{fontSize: "18px"}}>En el asunto indícanos las áreas de tu interés, o completa el formulario a continuación. Apenas dispongamos de una vacante acorde a lo que buscas te contactaremos. Para mayor información sobre ofertas laborales visita nuestro perfil.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    {/* <img src={imagenEjemplo} alt="Descripción de la imagen" className="img-fluid" /> */}
                    </div>
                </div>
            </section>
            <section className='container'>
                <div>
                <h1 style={{fontSize: "60px"}}> Contacta a un <span style={{fontWeight: "100"}}> <br/>experto </span></h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12"  style={{backgroundColor: "#FFFFFF", color: "black"}}>
                        <div className='mb-5'>
                            <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Llena tus datos y nos comunicaremos contigo. </p>
                        </div>
                        <div className="alex">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control form-control-lg" placeholder='Nombres' id="nombres" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control form-control-lg" placeholder='Apellidos' id="apellidos" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div >
                            <form>
                                <button
                                type=""
                                className="btn w-100"
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "5px",
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
                    <div className="col-md-6">
                    {/* <img src={imagenEjemplo} alt="Descripción de la imagen" className="img-fluid" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteTrabaja

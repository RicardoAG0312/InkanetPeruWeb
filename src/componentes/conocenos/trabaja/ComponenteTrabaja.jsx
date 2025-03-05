import React, { useRef } from 'react'
import {ComponenteBarraNavegacion} from "../../../routers/routers"
import HeaderForm from '../../ui/HeaderForm'
import Group from "../../../images/group.png";
import "./trabaja.css";

function ComponenteTrabaja() {
    const formRef = useRef();
    const nombresRef = useRef();
    const apellidosRef = useRef();
    const emailRef = useRef();
    const telefonoRef = useRef();
    const estudiosRef = useRef();
    const carreraRef = useRef();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const nombresIngresados = nombresRef.current.value;
        const apellidosIngresados = apellidosRef.current.value;
        const emailIngresado = emailRef.current.value;
        const telefonoIngresado = telefonoRef.current.value;
        const estudiosIngresado = estudiosRef.current.value;
        const carreraIngresada = carreraRef.current.value;

        const correo = "administracion@inkanetperu.com";
        const gmailHead = "Información Inkanet Perú";
        const gmailBody = `Nombres: ${nombresIngresados}\nApellidos: ${apellidosIngresados}\nEmail: ${emailIngresado}\nTeléfono: ${telefonoIngresado}\nUniversidad o Instituto: ${estudiosIngresado}\nCarrera: ${carreraIngresada}`;

        const urlGmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${encodeURIComponent(
        gmailHead
        )}&body=${encodeURIComponent(gmailBody)}`;

        window.open(urlGmail, "_blank");

        // Limpiar los inputs después de enviar
        formRef.current.reset();
    };

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
                    <div className="col-md-6">
                        <h1 style={{fontSize: "50px"}}><span style={{fontWeight: "bold"}}>Forma parte de nuestro equipo</span> <span>si cumples con este perfil</span></h1>
                        <ul style={{marginLeft: "-10px", marginTop: "20px", fontSize: "20px"}}>
                            <li>Proactivo e innovador</li>
                            <li>Orientado al servicio al cliente</li>
                            <li>Enfocado al trabajo en equipo</li>
                            <li>Exigente</li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex align-item-center justify-content-center">
                        <img src={Group} alt="Descripción de la imagen" className="img-fluid" style={{width:"", height:"400px"}}/>
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-cv p-5'>
                <div className='row w-100 '>
                    <div className="col-md-6 p-5" style={{marginLeft: "50px", color: "white"}}>
                        <h1 style={{textShadow: "-5px 5px 5px rgba(0, 0, 0, 0.5)"}}>Si estás interesado en integrarte a Inkanet, envíanos tu CV al e-mail:</h1>
                        <button className="btn btn-light mt-3 mb-3" style={{borderRadius: "50px", minWidth: "100%"}}><h3 style={{color: "#09AEAF", margin: "0px"}}>administracion@inkanetperu.com</h3></button>
                        <div>
                            <p style={{fontSize: "18px"}}>En el asunto indícanos las áreas de tu interés, o completa el formulario a continuación. Apenas dispongamos de una vacante acorde a lo que buscas te contactaremos. Para mayor información sobre ofertas laborales visita nuestro perfil.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='form-trabajo container p-5'>
                <div className='ms-5'>
                    <h1 style={{fontSize: "60px", fontWeight: "bold"}}> Contacta a un <span style={{fontWeight: "100"}}> <br/>experto </span></h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12"  style={{backgroundColor: "#FFFFFF", color: "black"}}>
                        <div className='mb-5 mt-3'>
                            <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Llena tus datos y nos comunicaremos contigo. </p>
                        </div>
                        <div  style={{maxWidth: "400px"}}>
                            <form  ref={formRef} onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Nombres' id="nombres" required ref={nombresRef}/>
                                </div>
                                <div className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Apellidos' id="apellidos"required ref={apellidosRef} />
                                </div>
                                <div className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Email' id="email" required ref={emailRef}/>
                                </div>
                                <div className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Telefono/Celular' id="number" required ref={telefonoRef}/>
                                </div>
                                <div className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Universidad/Instituto' id="estudios" required ref={estudiosRef}/>
                                </div>
                                <div className="row mb-3">
                                    <input type="text" className="form-control form-control-lg input-personalizado" placeholder='Carrera' id="carrera" required ref={carreraRef}/>
                                </div>
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
                        <div className='d-flex flex-column justify-content-center align-items-start ' style={{color: "white", paddingTop: "50px", paddingBottom: "0px", paddingLeft: "20px", paddingRight: "20px"}}>
                            <h1 style={{color:"#000", fontSize:"50px"}}><span style={{fontWeight: "bold"}}>¡Te estamos</span> buscando!</h1>
                            <h2 style={{fontSize:"20px"}}>No solo conectamos cables, conectamos personas.</h2>
                            <p className='mt-3 mb-3'>En Inkanet ayudamos a las empresas en su evolución digital, para ello necesitamos talentos como tú.</p>
                            <h3>Conoce nuestras vacantes en el siguiente portal</h3>
                            <div className='d-flex align-items-end mt-5'>
                                <p className=''>¡Te estamos esperando!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteTrabaja

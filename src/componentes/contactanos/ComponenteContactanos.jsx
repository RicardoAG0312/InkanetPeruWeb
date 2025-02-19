import React, { useState } from "react";
import {ComponenteBarraNavegacion} from "../../routers/routers"
import HeaderForm from '../ui/HeaderForm';
import "./contactanos.css"

function ComponenteContactanos() {
    const [seleccionados, setSeleccionados] = useState([]);

    const servicios = [
        "Conectividad",
        "Servicios Gestionados",
        "Telefonía y CCUU",
        "Seguridad Gestionada",
        "Data Center",
        "Cloud",
        "Ciberseguridad",
        "SAP",
        "Internet Satelital",
        "CSIRT",
    ];

    const toggleSeleccion = (servicio) => {
        if (seleccionados.includes(servicio)) {
          setSeleccionados(seleccionados.filter((item) => item !== servicio)); // Si ya está seleccionado, lo quita
        } else {
          setSeleccionados([...seleccionados, servicio]); // Si no está, lo agrega
        }
    };

    return (
        <>
            <section className="container-fluid p-0 contactanos-section">
                <ComponenteBarraNavegacion />
                <HeaderForm 
                    img = ""
                    titulo = "Consulta y cotiza nuestras soluciones para tu empresa"
                    texto1 = "Contamos con un equipo de consultores e ingenieros certificados que atenderán tus solicitudes de forma personalizada en las próximas horas."
                    texto2 = ""
                    form = {false}
                />
            </section>
            <section className='container-fluid p-0' style={{height: "auto"}}>
                <div className="row h-100 w-100 m-0">
                    <div className="col-md-6 col-12 p-5" style={{backgroundColor: "#1A1A1A", color: "white"}}>
                        <div className='mb-5'>
                            <h1 style={{fontSize: "60px"}}> Selecciona el <span style={{fontWeight: "100"}}> servicio a cotizar</span></h1>
                            <span style={{fontWeight: "100", fontSize: "30px"}}> (Obligatorio) </span>
                        </div>
                        <div className="mb-4">
                            <div className="d-flex flex-wrap">
                                <div className="row w-100">
                                {servicios.map((servicio, index) => (
                                    <div key={index} className="col-md-6 mb-3">
                                    <button
                                        className="btn w-100 d-flex align-items-center p-3"
                                        style={{
                                        borderRadius: "10px",
                                        backgroundColor: seleccionados.includes(servicio) ? "#05AFA5" : "#3A4040",
                                        color: "white",
                                        border: "none",
                                        cursor: "pointer",
                                        }}
                                        onClick={() => toggleSeleccion(servicio)}
                                    >
                                        <span
                                        className="me-2"
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            borderRadius: "50%",
                                            backgroundColor: seleccionados.includes(servicio) ? "white" : "transparent",
                                            border: "2px solid white",
                                            display: "inline-block",
                                        }}
                                        ></span>
                                        <span>
                                        {seleccionados.includes(servicio) ? "Conectividad" : servicio}
                                        </span>
                                    </button>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>   
                        <div className="w-100 pb-2" style={{ borderBottom: "1px solid #4B4B4B", color: "#7B7B7B"}}>
                            ¿Necesitas otro servicio?
                        </div>        
                    </div>
                    <div className="col-md-6 col-12 p-5"  style={{backgroundColor: "#FFFFFF", color: "black"}}>
                        <div className='mb-5'>
                            <h1 style={{fontSize: "60px"}}> Contacta a un <span style={{fontWeight: "100"}}> experto </span></h1>
                            <p style={{color: "black"}}> <i style={{color: "#1FB3AE"}} className="bi bi-play-fill"></i> Llena tus datos y nos comunicaremos contigo. </p>
                        </div>
                        <div className="mb-4">
                            <form>
                                {["Nombres", "Apellidos", "Ruc", "Teléfono / Celular", "Email"].map((placeholder, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                    type={placeholder === "Email" ? "email" : "text"}
                                    
                                    placeholder={placeholder}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        borderBottom: "1px solid #ccc",
                                        borderRadius: "0",
                                        color: "black",
                                        fontSize: "16px",
                                        padding: "10px 5px",
                                        outline: "none",
                                        width: "100%",
                                    }}
                                    />
                                </div>
                                ))}
                            </form>
                        </div>
                        <div >
                            <form>
                                <div className="mb-2">
                                    <input type="checkbox" id="info" className="me-2" />
                                    <label htmlFor="info">Deseo recibir información de ofertas y promociones</label>
                                </div>
                                <div className="mb-4">
                                    <input type="checkbox" id="politica" className="me-2" />
                                    <label htmlFor="politica">
                                        Acepto la <a href="/" style={{ color: "#05AFA5", textDecoration: "none" }}>Política de protección de datos</a>
                                    </label>
                                </div>
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
                                Aceptar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteContactanos

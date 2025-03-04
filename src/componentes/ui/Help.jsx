import React from 'react'
import { useNavigate } from 'react-router-dom'

function Help() {
    const navigate = useNavigate();

    return (
        <section className="container-fluid p-0" style={{ backgroundColor: "#3A4040", height: "auto"}}>
            <div className="row p-0 m-0 d-flex justify-content-center align-items-center text-center text-md-start">
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center p-4" >
                    <h1 className='text-white fw-bold text-center'>
                        ¿Cómo puedo <span style={{ color: "#05AFA5", fontWeight: "bold" }}>ayudarte?</span>
                    </h1>
                    <div className='mt-4 d-flex flex-wrap justify-content-center align-items-center gap-3'>
                        <div onClick={() => navigate("/contacto")} className='text-white d-flex justify-content-center align-items-center gap-2' 
                        style={{ background: "#05AFA5", borderRadius: "10px", width: "200px", height: "60px", cursor: "pointer" }}>
                        <img src={require("../../images/diseño23.png.png")} alt="Diseño Comprar" style={{width: "40px", height: "auto"}}/> ¿Cómo comprar?
                        </div>
                        <div onClick={() => navigate("/contacto")} className='text-white d-flex justify-content-center align-items-center gap-3' 
                        style={{ background: "#8D8D8D", borderRadius: "10px", width: "200px", height: "60px", cursor: "pointer" }}>
                        <img src={require("../../images/diseño22.png.png")} alt="Diseño Comprar" style={{width: "40px", height: "auto"}}/> Soporte 
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 p-0 d-flex justify-content-end align-items-center">
                <img 
                    src={require("../../images/diseño2.png.png")} 
                    alt="Diseño" 
                    className="img-fluid w-100" 
                    style={{ maxWidth: "600px", height: "auto", borderRadius: "10px" }} 
                />
                </div>
            </div>
        </section>
    )
}

export default Help

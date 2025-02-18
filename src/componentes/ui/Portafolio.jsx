import React from 'react'

function Portafolio({subtitulo, texto}) {
    return (
        <section className="container-fluid p-5" style={{ height: "auto", backgroundColor: "#1A1A1A" }}>
            <div className="row p-2 m-0 d-flex justify-content-center align-items-center text-center text-md-start">
                {/* Columna del título */}
                <div className="col-md-6 col-12 h-100 px-3 px-md-5">
                    <h1 className="text-white fw-bold"
                        style={{ 
                            fontSize: "clamp(2rem, 5vw, 4.5rem)", // Ajuste dinámico del tamaño
                            marginLeft: "10px"
                        }}>
                        Portafolio de <span style={{ color: "#09AEAF" }}> {subtitulo} </span>
                    </h1>
                </div>

                {/* Columna del texto */}
                <div className="col-md-6 col-12 text-white h-100 px-3 px-md-5">
                    <p className="m-0" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                        {texto}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Portafolio

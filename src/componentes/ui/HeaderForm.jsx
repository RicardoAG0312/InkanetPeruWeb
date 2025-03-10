import React from "react";

function HeaderForm({ img, titulo, texto1, texto2, form }) {

    return (
        <div className="row h-100 m-4 row-header d-flex justify-content-center align-items-center">
            {/* Sección de imagen y texto */}
            <div className="p-5 col-md-6 col-12 d-flex justify-content-center align-items-start flex-column gap-3">
                {img && <img src={require(`../../images/${img}`)} alt="Header" style={{ width: "300px", height: "auto" }} />}
                <h1 className="text-white fw-bold" style={{ fontSize: "60px", width: "60%", textShadow: "2px 2px 2px black" }}>
                {titulo}
                </h1>
                <h5 className="text-white">{texto1}</h5>
                <p className="text-white">{texto2}</p>
            </div>

            {/* Sección del formulario */}
            <div className="content-headForm col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                {form ? (
                <div className="container headForm h-100">
                    <h2>Contacta con un asesor</h2>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Ingresa los datos de tu empresa RUC y un asesor de negocios se comunicará contigo para ayudarte
                    </p>

                    <form className="d-flex align-items-center justify-content-center flex-column gap-2 w-100" action="https://formsubmit.co/ea3030451b381f488f15a922403e35c4" method="POST">
                        <input className="w-100" type="text" name="nombres" placeholder="Nombres" required  />
                        <input className="w-100"type="text" name="apellidos" placeholder="Apellidos" required  />
                        <input className="w-100"type="text" name="ruc" placeholder="Ruc" required  />
                        <input className="w-100"type="text" name="telefono" placeholder="Teléfono / Celular" required />
                        <input className="w-100"type="email" name="email" placeholder="Email" required  />
                        <button type="submit" className="botton">Enviar</button>
                    </form>
                </div>
                ) : (
                <div></div>
                )}
            </div>
        </div>
    );
}

export default HeaderForm;

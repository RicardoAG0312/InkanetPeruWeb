import React, { useRef } from "react";

function HeaderForm({ img, titulo, texto1, texto2, form }) {
    const formRef = useRef();
    const nombresRef = useRef();
    const apellidosRef = useRef();
    const rucRef = useRef();
    const telefonoRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const nombresIngresados = nombresRef.current.value;
        const apellidosIngresados = apellidosRef.current.value;
        const rucIngresado = rucRef.current.value;
        const telefonoIngresado = telefonoRef.current.value;
        const emailIngresado = emailRef.current.value;

        const correo = "ventas@inkanetperu.com";
        const gmailHead = "Información Inkanet Perú";
        const gmailBody = `Nombres: ${nombresIngresados}\nApellidos: ${apellidosIngresados}\nRuc: ${rucIngresado}\nTeléfono: ${telefonoIngresado}\nEmail: ${emailIngresado}`;

        const urlGmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${encodeURIComponent(
        gmailHead
        )}&body=${encodeURIComponent(gmailBody)}`;

        window.open(urlGmail, "_blank");

        // Limpiar los inputs después de enviar
        formRef.current.reset();
    };

    return (
        <div className="row m-4 row-header d-flex justify-content-center align-items-center">
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

                <form className="d-flex align-items-center justify-content-center flex-column gap-2 w-100" ref={formRef} onSubmit={handleSubmit}>
                <input className="w-100" type="text" name="nombres" placeholder="Nombres" required ref={nombresRef} />
                <input className="w-100"type="text" name="apellidos" placeholder="Apellidos" required ref={apellidosRef} />
                <input className="w-100"type="text" name="ruc" placeholder="Ruc" required ref={rucRef} />
                <input className="w-100"type="text" name="telefono" placeholder="Teléfono / Celular" required ref={telefonoRef} />
                <input className="w-100"type="email" name="email" placeholder="Email" required ref={emailRef} />
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

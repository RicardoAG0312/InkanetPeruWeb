import React, { useRef } from 'react';
import "../estilos/ComponenteContacto.css";
import { NieveComponente } from "./NieveComponente";


function ComponenteContacto() {
    const formRef = useRef();
    const nombreRef = useRef();
    const emailRef = useRef();
    const celularRef = useRef();
    const comentarioRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const nombreIngresado = nombreRef.current.value;
        const emailIngresado = emailRef.current.value;
        const celularIngresado = celularRef.current.value;
        const comentarioIngresado = comentarioRef.current.value;
        const gmailHead = "Información Inkanet Perú";
        const correo = "ventas@inkanetperu.com";
        const gmailBody = `Nombre: ${nombreIngresado}\nCorreo: ${emailIngresado}\nCelular: ${celularIngresado}\nMensaje: ${comentarioIngresado}`;
        const headGmail = encodeURI(gmailHead);
        const bodyGmail = encodeURI(gmailBody);
        const urlGmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${headGmail}&body=${bodyGmail}`;
        window.open(urlGmail, "_blank");
        setTimeout(() => formRef.current.reset(), 1000);
    };

    return (
        
        <section className="container-fluid p-0">
            <NieveComponente />

            <div className="row">
                <div className="col-12 col-lg-4">
                    <form onSubmit={handleSubmit} ref={formRef}>
                    <label htmlFor="name"> (*) Nombre: </label><br />
                    <input type="text" id="nombre" name="name" placeholder="Ingresa tu nombre" required ref={nombreRef} /><br />
                    <label htmlFor="email">(*) Email:</label><br />
                    <input type="email" id="email" name="email" placeholder="Ingresa tu email" required ref={emailRef} /><br />
                    <label htmlFor="number">(*) Teléfono:</label><br />
                    <input type="number" id="celular" name="number" placeholder="Ingresa tu celular" required ref={celularRef} /><br />
                    <label htmlFor="lname"> (*) Mensaje:</label><br />
                    <textarea id="comentario" name="comentario" placeholder="Escribe un comentario" required style={{resize: 'none'}} ref={comentarioRef}></textarea><br /><br />
                    <input type="submit" value="Enviar" id="botonEnviar" />
                    </form>  
                </div>
                <div className="col-12 col-lg-8 p-0 m-0">
                    <iframe title="Mapa de Google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2353263584555!2d-77.02634382610374!3d-12.09603584281767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86563f6575f%3A0x248fb2922b306e19!2sC.%20German%20Schreiber%20Gulsmanco%20276%2C%20San%20Isidro%2015047!5e0!3m2!1ses-419!2spe!4v1713823937529!5m2!1ses-419!2spe" width="100%" height="520px" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="p-0 m-0"></iframe>
                </div>
            </div>
        </section>
    );
}

export default ComponenteContacto;

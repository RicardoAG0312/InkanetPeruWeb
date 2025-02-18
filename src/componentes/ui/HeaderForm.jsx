import React from 'react'

function HeaderForm({titulo, texto1, texto2}) {
    return (
        <div className='row m-4 row-header'>
            <div className="p-5 col-md-6 col-12 d-flex justify-content-center align-items-start flex-column gap-3">
                <h1 style={{fontSize: "60px", fontWeight: "bold", width: "80%", color: "white", textShadow: "2px 2px 2px black"}}> {titulo} </h1>
                <h5 className='text-white'> {texto1} </h5>
                <p className='text-white'> {texto2} </p>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh"}}>
                <div className='container headForm'>
                    <h2> Contacta con un asesor </h2>
                    <p style={{fontSize: "12px", textAlign: "center"}}> Ingresa los datos de tu empresa RUC 20 y un asesor de negocios se comunicará contigo para ayudarte </p>
                    <div className='d-flex flex-column gap-2 w-100'>
                        <input type="text" name="nombres" id="nombres" placeholder='Nombres'/>
                        <input type="text" name="apellidos" id="apellidos" placeholder='Apellidos'/>
                        <input type="text" name="ruc" id="ruc" placeholder='Ruc 20'/>
                        <input type="text" name="telefono" id="telefono" placeholder='Teléfono / Celular'/>
                        <input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='botton'>
                        Enviar
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderForm

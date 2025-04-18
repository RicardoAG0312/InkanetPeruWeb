import React from 'react'
import AnimatedSection from '../AnimatedSection'

function Informacion({ titulo1, span1, texto1, texto2, titulo2, span2, texto3, texto4 }) {
    return (
        <div className='h-100 row p-5' >
            <AnimatedSection as="div" direction="right" className=" col-md-6 col-12 d-flex flex-column justify-content-center gap-2">
                <h1 style={{ fontSize: "35px", width: "50%", fontWeight: "bold" }}> {titulo1} <span> {span1} </span> </h1>
                <p>
                    {texto1}
                </p>
                <p>
                    {texto2}
                </p>
            </AnimatedSection>
            <div className="col-md-6 col-12" >

            </div>
            <div className="col-md-6 col-12">

            </div>
            <AnimatedSection as="div" direction="left" className="col-md-6 col-12 d-flex flex-column justify-content-center gap-2">
                <h1 style={{ fontSize: "35px", fontWeight: "bold" }}> {titulo2} <span> {span2} </span> </h1>
                <p>
                    {texto3}
                </p>
                <p>
                    {texto4}
                </p>
            </AnimatedSection>
        </div>
    )
}

export default Informacion

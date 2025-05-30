import React from 'react'
import AnimatedSection from '../AnimatedSection'

function CartasNumeros({numero, texto}) {
    return (
        <div className="col-md-4 d-flex align-items-center justify-content-center mt-5 mb-5">
            <AnimatedSection as="div" direction="bottom" className="d-flex flex-column justify-content-center align-items-center gap-3"> 
                <h1 style={{ fontSize: "50px", margin: "0px", textAlign: "center", borderBottom: "1px solid white", paddingBottom: "15px", width: "100px", color: "#1FB3AE"}}> {numero} </h1>
                <p className="texto w-75 text-center"> {texto} </p>
            </AnimatedSection>
        </div>
    )
}

export default CartasNumeros

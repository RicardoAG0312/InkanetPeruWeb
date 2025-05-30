import React from 'react';
import BotonAnimado from './BotonAnimado';
import AnimatedSection from '../AnimatedSection';

const ServiceColumn = ({ image, title, description, boton, direccion }) => {
    return (
        <div className="col-md-4">
            <div className="disenio">
                <div className="design card-body d-flex flex-column justif align-items-center">
                    <AnimatedSection as="div" direction="top" className="circle-image">
                        <img src={require(`../../images/${image}`)} alt={title} className="img-fluid rounded-circle" />
                    </AnimatedSection>
                    <AnimatedSection as="div" direction="bottom" className='mt-3 mb-auto'>
                        <h2 className="card-title text-center">{title}</h2>
                    </AnimatedSection>
                    <p className="card-text text-center">{description}</p>
                    {/* <a href="#" className="btn btn-info">Información</a> */}
                    {boton !== "none" && (
                        <AnimatedSection as="div" direction="right" className="mt-auto mb-5">
                            <BotonAnimado
                                colorIconoBase="#05AFA5"
                                colorLetraBase="white"
                                colorBordeBase="#05AFA5"
                                colorIconoPress="white"
                                fondoTextoPress="black"
                                colorLetraPress="white"
                                nav={direccion}
                            />
                        </AnimatedSection>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceColumn;

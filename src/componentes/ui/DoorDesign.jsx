import React from 'react';
import BotonAnimado from './BotonAnimado';
const ServiceColumn = ({ image, title, description, boton }) => {
    return (
        <div className="col-md-4">
            <div className="disenio">
                <div className="design card-body d-flex flex-column  align-items-center">
                    <div className="circle-image">
                        <img src={require(`../../images/${image}`)} alt={title} className="img-fluid rounded-circle" />
                    </div>
                    <div className='mt-3 mb-auto'>
                    <h2 className="card-title ">{title}</h2>
                    </div>
                    <p className="card-text text-start mb-5">{description}</p>
                    {/* <a href="#" className="btn btn-info">Información</a> */}
                    {boton !== "none" && (
                        <div className="mt-auto mb-5">
                            <BotonAnimado
                                colorIconoBase="#05AFA5"
                                colorLetraBase="white"
                                colorBordeBase="#05AFA5"
                                colorIconoPress="white"
                                fondoTextoPress="black"
                                colorLetraPress="white"
                                // nav={direccion}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceColumn;

import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../container/componenteB';

const ComponenteA = ({contacto}) => {   
    
   
    return (
        <div>
            <h2>
                Nombre : { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Correo: { contacto.email }
            </h4>
            <h4>
            <ComponenteB estado={contacto.conectado}></ComponenteB>
            </h4>          
            
            
        </div>
    );}

    ComponenteA.propTypes = {
        contacto: PropTypes.instanceOf(Contacto),
      };


export default ComponenteA;
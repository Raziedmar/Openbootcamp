import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({contact}) => {
   //const cambiar =() =>{
    //    contact.conectado=false
   //}
   
    return (
        <div>
            <h5>
                Estado de conexión: { contact.conectado? "Contacto en Línea" : "Contacto No Disponible" }
            </h5>
            <div>
                {/*<button onClick={ cambiar }>
                Cambiar Estado
                </button>*/}
            </div>
            
        </div>
    );
};


ComponenteB.propTypes = {
    contact : PropTypes.instanceOf(Contacto)

};


export default ComponenteB;
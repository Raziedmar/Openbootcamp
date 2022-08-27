import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../container/componenteB';

const ComponenteA = () => {

    const objeto = new Contacto("Mario", "Urquiza", "edmario84",true);
    
   
    return (
        <div>
            <h2>
                Nombre : { objeto.nombre }
            </h2>
            <h3>
                Apellido: { objeto.apellido }
            </h3>
            <h4>
                Correo: { objeto.email }
            </h4>
            <h4>
            <ComponenteB contact={objeto}></ComponenteB>
            </h4>          
            
            
        </div>
    );}


export default ComponenteA;
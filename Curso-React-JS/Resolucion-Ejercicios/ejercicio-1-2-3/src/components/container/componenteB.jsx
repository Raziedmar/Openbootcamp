import React,{useState} from 'react';
import PropTypes from 'prop-types';


const ComponenteB = (estado) => {
   // Breve introducción al useState
    // const[variable,método para actualizarla]=useState(valor inicial)
    const [conectado, setConectado] = useState(estado);
    const cambiar =() =>{
        //actualizamos el state
        setConectado(!conectado)
    }
   
    return (
        <div>
            <h5>
                Estado de conexión: { conectado===false? "Contacto No Diponible" : "Contacto en Línea" }
            </h5>
            <div>
                <button onClick={ cambiar }>
                Cambiar Estado
                </button>
            </div>
            
        </div>
    );
};


ComponenteB.propTypes = {
    estado : PropTypes.bool

};


export default ComponenteB;
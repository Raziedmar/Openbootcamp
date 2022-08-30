/**
 *  * Ejemplo de uso del Hook useState
 * Crear un componente e tipo función y acceder a su estado 
 * privado a través de un hook y, además, poder modificarlo
 *  */
import React,{useState} from 'react';

const Ejemplo1 = () => {
    //valor inicial para un contador
    const valorInicial = 0;
    // valor inicial para un objeto Persona
    const personaInicial = {
        nombre:'Mario',
        email:'edmario84@gmail.com'
    }
    /**
     * Queremos que el valorInicial y personaInicial sean 
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcion para cambiar]=useState(valor Inicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //Función para actualizar el estado privado: contador

    function incrementarContador(){
        setContador(contador +1);
    }
    function actualizarPersona(){
        setPersona(
            {
                nombre:'Edmar',
                email:'edmar@gmail.com'
            }
        )
    }
    return (
        <div>
        <h1>
            Ejemplo de useState
        </h1>
        <h2>
            CONTADOR:{contador}
        </h2>
        <h2>
            DATOS DE LA PERSONA
        </h2>
        <h3>
            NOMBRE:{persona.nombre}
        </h3>
        <h4>
            EMAIL:{persona.email}
        </h4>
        <button onClick = { incrementarContador }>
            Incrementar Contador
        </button>
        <button onClick = { actualizarPersona }>
            Actualizar Persona
        </button>
            
        </div>
    );
};

export default Ejemplo1;

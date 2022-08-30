/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente
 * Dispone de un contexto que va atener un valor que recibe desde el padre
 */
const miContexto = React.createContext(null)
const Componente1 = () => {

    //Inicializamos un estado vacío que va a rellenarse con los 
    //datos del contexto del padre

    const state = useContext(miContexto)
    return (
        <div>
        <h1>
            El Token es: {state.token}
        </h1>
        <Componente2></Componente2>
            
        </div>
    );
}

const Componente2 = () => {

    //Inicializamos un estado vacío que va a rellenarse con los 
    //datos del contexto del padre

    const state = React.createContext(null)
    return (
        <div>
        <h1>
            El Token es: {state.token}
        </h1>
        <Componente2></Componente2>
            
        </div>
    );
}

export default function MiComponenteConContexto(){
    const estadoInicial={
        token:'1234567',
        sesion:1
    }

    //Creamos el estado de este componente

    useState[sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token:'JWT123456789',
                session: sessionData.sesion +1
            }
        )
    }
    return(
        <miContexto.Provider value={sessionData}>
        {/*Todo lo que esté aquí dentro puede leer los datos de session data*/}
        {/*Además, si se actualiza los componentes de aquí tambien lo actualizan */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualiza sesión</button>
        </miContexto.Provider>
    )
}



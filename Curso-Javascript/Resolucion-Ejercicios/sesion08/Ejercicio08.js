/*Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos*/
function siempreTrue() {
    return true
}

async function asinc() {
    
    return setTimeout(function(){console.log("Hola soy una promesa");}, 5000);
    //setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* indicePar() {
    let id = 0
    while(true) {
        yield id = id+ 2
    }
}

console.log(siempreTrue())
console.log(asinc())
const gen = indicePar();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
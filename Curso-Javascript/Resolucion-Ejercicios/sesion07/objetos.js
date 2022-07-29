/*Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const datos = {
    nombre: "Edmar",
    apellido: "Urquiza",
    edad: 37,
    altura:165,
    isDeveloper: true,
    
}
const mi_edad = datos.edad;
console.log(mi_edad);
const lista_datos = [
    datos,
    ,{
        nombre: "Juan",
        apellido: "Blas",
        edad: 35,
        altura: 167,
        eresDesarrollador: false
    },{
        nombre: "Erick",
        apellido: "Rodriguez",
        edad: 39,
        altura: 160,
        eresDesarrollador: false
    }
]

const lista_ordenada = lista_datos.sort((a, b) =>  b.edad-a.edad);

console.log(lista_ordenada);
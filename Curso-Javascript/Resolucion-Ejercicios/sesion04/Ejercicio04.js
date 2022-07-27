/*Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/

let str_nombre = 'Edmar';
let str_apellido = "Urquiza";
let estudiante = str_nombre.concat(" ",str_apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitud = estudiante.length;
let first = str_nombre.slice(0, 1);
let last = str_apellido.slice(str_apellido.length-1, str_apellido.length);
let sin_espacio=estudiante.replace(/ /g, '');
let a=estudiante.includes(str_nombre);



console.log(str_nombre);
console.log(str_apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitud);
console.log(first);
console.log(last);
console.log(sin_espacio);
console.log(a);
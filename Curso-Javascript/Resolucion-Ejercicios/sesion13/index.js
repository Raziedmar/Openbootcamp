/*Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal*/

let str_nombre ="Edmar";
let str_apellido = "Urquiza";
let estudiante = str_nombre.concat(" ",str_apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitud = estudiante.length;
let first = str_nombre.slice(0, 1);
let last = str_apellido.slice(str_apellido.length-1, str_apellido.length);
let sin_espacio=estudiante.replace(/ /g, "");
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
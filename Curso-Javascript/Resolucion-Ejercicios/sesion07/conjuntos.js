/*Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)*/

const array = ["Amanda", "Lyanna", "Edmar"];
const set_familia = new Set(array);

console.log(set_familia);
set_familia.add("Edmar");
console.log(set_familia);
set_familia.add("Javascript");
console.log(set_familia);
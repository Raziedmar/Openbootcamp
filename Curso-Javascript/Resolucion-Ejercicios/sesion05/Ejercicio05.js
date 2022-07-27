/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/
let altura_cm = 165;
let altura_mt = 1.65;
let peso_kg = 68.4;
let altura_round = Math.ceil(altura_cm);
let peso_round = Math.floor(peso_kg);
let duda = (Number.MAX_VALUE + 1 === Number.MAX_VALUE);

console.log(altura_cm);
console.log(altura_mt);
console.log(peso_kg);
console.log(altura_round);
console.log(peso_round);
console.log(duda);
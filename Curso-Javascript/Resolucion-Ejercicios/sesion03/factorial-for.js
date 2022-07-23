/*
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
*/
let num=10;
let f=1;
for (let i = num; i > 0; i--) {
    f=i*f; 
}
console.log(f);
/*
- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
*/
let num=10
let i = 1;
let f=1;
while (i <= num) {
    f=i*f; 
    i++;
}
console.log(f);
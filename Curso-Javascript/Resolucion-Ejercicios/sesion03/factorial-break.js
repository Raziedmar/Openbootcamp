/*
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
*/
let j = 10;
let f=1;
while (j > 0) {
    if(j==1){break;}
    f=j*f; 
    j--;
}
console.log(f);
/*Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función*/


function fibonacci(num){
    let arrayfibo = [];
    let ant=0,ini,temp=1;
   
    for (let i = 0; i < num; i++) {
        ini=temp;        
        temp=ant+ini;        
        ant=ini;
        arrayfibo = [...arrayfibo, ini];       
    }
    return arrayfibo;

}

console.log(fibonacci(6));
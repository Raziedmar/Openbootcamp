/*Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const lista_compra = ["Arroz", "Carne", "Leche", "Azúcar", "Nueces" , "Alimento mascotas","Baterías"];
lista_compra.push("Aceite de Girasol");
lista_compra.pop();
const peliculas_favoritas = [
    { titulo: "Cinema Paradiso", director: "Giuseppe Tornatore" ,fecha: new Date(1988, 0, 1)},
    { titulo: "En busca de la Felicidad", director: "Gabriele Muccino" ,fecha:new Date(2006, 11, 15)},
    { titulo: "El Señor de los Anillos: Las dos Torres", director: "Peter Jackson" ,fecha:new Date(2002, 0, 1)},    
]
const nuevaLista1 = peliculas_favoritas.filter(obj => obj.fecha > new Date(2010, 0, 1));
const nuevaLista2 = peliculas_favoritas.map(valor => valor.director);
const nuevaLista3 = peliculas_favoritas.map(valor => valor.titulo);
const nuevaLista4 = nuevaLista2.concat(nuevaLista3);
const nuevaLista5 = [...nuevaLista2, ...nuevaLista3]

console.log(nuevaLista1);
console.log(nuevaLista2);
console.log(nuevaLista3);
console.log(nuevaLista4);
console.log(nuevaLista5);
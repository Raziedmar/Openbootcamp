// Listas, array o arreglo
const Lista1=[1,"hola",true,undefined,null];
const Lista2=new Array(1,"hola",true,undefined,null);
const Lista3=new Array;
Lista3[0]="Soy el primer elemento, index 0";
const Lista4=[Lista1 ,Lista2 ,Lista3 ];

console.log(Lista1);
console.log(Lista2);
console.log(Lista3);
console.log(Lista4);

//Objetos
const movil={
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raul"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32,

    }
}

console.log(movil.contactos);
console.log(movil.tarjeta.marca);

movil.anyo=2019;
movil.marca="Samsung";

console.log(movil.anyo);
console.log(movil.marca);

//Fechas

const ahora =new Date();
console.log(ahora);

const fecha_milis=new Date(10);
console.log(fecha_milis);

const fecha_cadena=new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores=new Date(2022,2,15);
console.log(fecha_valores);

const dia=ahora.getDay();
const mes=ahora.getMonth();
const anyo=ahora.getFullYear();

console.log(dia,mes,anyo)
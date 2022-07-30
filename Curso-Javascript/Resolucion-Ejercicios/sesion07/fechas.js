/*Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/

const fecha_hoy = new Date();
const fecha_nacimiento = new Date(1984, 06, 30);
const variable=fecha_hoy>fecha_nacimiento;
const dia_nac=fecha_nacimiento.getDate();
const mes_nac=fecha_nacimiento.getMonth() + 1;
const anio_nac=fecha_nacimiento.getFullYear();

console.log(fecha_hoy);
console.log(fecha_nacimiento);
console.log(variable);

console.log(dia_nac);
console.log(mes_nac);
console.log(anio_nac);
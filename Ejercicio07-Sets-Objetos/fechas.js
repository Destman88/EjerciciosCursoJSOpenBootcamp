const hoy = new Date();
const nacimiento = new Date(1988, 06, 08);
const esMayor = hoy > nacimiento;
const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anhoNacimiento = nacimiento.getFullYear();

console.log(hoy);
console.log(nacimiento);
console.log(esMayor);
console.log(diaNacimiento);
console.log(mesNacimiento);
console.log(anhoNacimiento);

const alturaCM = 180;
const alturaMetros = 1.8;
const pesoKG = 105.5;
const redondeaPeso = Math.ceil(pesoKG);
const redondeaAltura = Math.floor(alturaMetros);
const igual = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(redondeaPeso); //106
console.log(redondeaAltura); //1
console.log(igual); //true

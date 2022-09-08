//función sin parámetros que devuelva siempre "true"
const devuelveTrue = () => console.log("true");
devuelveTrue(); // true

//función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa() {
  setTimeout(() => console.log("Hola soy una promesa"), 5000);
}
promesa(); //Hola soy una promesa

//función generadora de índices pares automáticos
function* generarIDPar() {
  let id = 0;
  while (true) {
    id += 2;
    if (id === 20) {
      return id;
    }
    yield id;
  }
}
const gen = generarIDPar();

console.log(gen.next().value); //0
console.log(gen.next().value); //2
console.log(gen.next().value); //4
console.log(gen.next().value); //6
console.log(gen.next().value); //8
console.log(gen.next().value); //10
console.log(gen.next().value); //12
console.log(gen.next().value); //14
console.log(gen.next().value); //16
console.log(gen.next().value); //18
console.log(gen.next().value); //20

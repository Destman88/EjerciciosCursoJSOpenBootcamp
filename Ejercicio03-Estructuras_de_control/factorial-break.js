let numero2 = 10;
let factorial3 = 1;
while (true) {
  factorial3 *= numero2;
  numero2--;
  if (numero2 === 1) break;
}
console.log("El factorial de 10 es = " + factorial3); //El factorial de 10 es = 3628800

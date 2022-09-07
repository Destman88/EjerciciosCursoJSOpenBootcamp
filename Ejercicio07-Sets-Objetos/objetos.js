const datos = {
  nombre: "Derick",
  apellido: "Maitland",
  edad: 34,
  altura: 1.8,
  isDeveloper: true,
};
console.log(datos);

const edad = datos.edad;
console.log(edad);

const listaDatos = [
  { ...datos },
  {
    nombre: "Pamela",
    apellido: "Vega",
    edad: 32,
    altura: 1.68,
    isDeveloper: false,
  },
  {
    nombre: "Álvaro",
    apellido: "Solano",
    edad: 42,
    altura: 1.75,
    isDeveloper: true,
  },
];
console.log(listaDatos);

const nuevaLista = listaDatos.sort((a, b) => b.edad - a.edad);
console.log(nuevaLista);

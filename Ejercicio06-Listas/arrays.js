const compras = ["Café", "Leche", "Arroz", "Carne", "Azúcar"];
console.log(compras); //[ 'Café', 'Leche', 'Arroz', 'Carne', 'Azúcar' ]

compras.push("Aceite de girasol");
console.log(compras); //[ 'Café', 'Leche', 'Arroz', 'Carne', 'Azúcar', 'Aceite de girasol' ]

compras.pop();
console.log(compras); //[ 'Café', 'Leche', 'Arroz', 'Carne', 'Azúcar' ]

const peliculasFav = [
  {
    titulo: "Scary Movie",
    director: "Keenen Ivory Wayans",
    fecha: new Date(2000, 6, 7),
  },
  {
    titulo: "Spider-Man: Sin Camino a Casa",
    director: "Jon Watts",
    fecha: new Date(2021, 11, 17),
  },
  {
    titulo: "John Wick",
    director: "Chad Stahelski",
    fecha: new Date(2014, 9, 24),
  },
];

const peliculaMayor = peliculasFav.filter(
  (obj) => obj.fecha > new Date(2010, 1, 1)
);
console.log(peliculaMayor);
// [ { titulo: 'Spider-Man: Sin Camino a Casa',
//     director: 'Jon Watts',
//     fecha: Fri Dec 17 2021 00:00:00 GMT-0600 (hora estándar central) },
//   { titulo: 'John Wick',
//     director: 'Chad Stahelski',
//     fecha: Fri Oct 24 2014 00:00:00 GMT-0600 (hora estándar central) } ]

const arrayDirectores = peliculasFav.map((dir) => dir.director);
console.log(arrayDirectores); //[ 'Keenen Ivory Wayans', 'Jon Watts', 'Chad Stahelski' ]

const arrayTitulos = peliculasFav.map((tit) => tit.titulo);
console.log(arrayTitulos); //[ 'Scary Movie', 'Spider-Man: Sin Camino a Casa', 'John Wick' ]

const nuevoListaPeliculas = arrayDirectores.concat(arrayTitulos);
console.log(nuevoListaPeliculas);
// [ 'Keenen Ivory Wayans',
//   'Jon Watts',
//   'Chad Stahelski',
//   'Scary Movie',
//   'Spider-Man: Sin Camino a Casa',
//   'John Wick' ]

const nuevoListaPeliculas2 = [...arrayDirectores, ...arrayTitulos];
console.log(nuevoListaPeliculas2);
// [ 'Keenen Ivory Wayans',
//   'Jon Watts',
//   'Chad Stahelski',
//   'Scary Movie',
//   'Spider-Man: Sin Camino a Casa',
//   'John Wick' ]

class Estudiante {
  constructor(nom, asig) {
    this.nombre = nom;
    this.asignaturas = asig;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante = new Estudiante("Derick", ["Javascript", "HTML", "CSS"]);
console.log(estudiante.obtenDatos());

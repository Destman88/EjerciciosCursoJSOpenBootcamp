const nombre = "Derick";
const apellido = "Maitland";
const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const largoEstudiante = estudiante.length;
const primeraLetraNombre = nombre[0];
const ultimaLetraApellido = apellido[apellido.length - 1];
const espacios = estudiante.replace(" ", "");
const incluido = estudiante.includes(nombre);

console.log(nombre); //Derick
console.log(apellido); //Maitland
console.log(estudiante); //Derick Maitland
console.log(estudianteMayus); //DERICK MAITLAND
console.log(estudianteMinus); //derick maitland
console.log(largoEstudiante); //15
console.log(primeraLetraNombre); //D
console.log(ultimaLetraApellido); //d
console.log(espacios); //DerickMaitland
console.log(incluido); //true

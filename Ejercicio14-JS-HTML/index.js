const alerta = document.getElementById("alerta");
alerta.addEventListener("click", () => alert("click en el botón"));
$(() => {
  $("#alerta").click(() => console.log("Hola, estoy utilizando jQuery"));
});

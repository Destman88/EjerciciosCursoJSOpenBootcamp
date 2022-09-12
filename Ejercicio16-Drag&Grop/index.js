const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (e) => {
    parrafo.classList.add("dragging");
    e.dataTransfer.setData("id", parrafo.id);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    //
  });
  seccion.addEventListener("drop", (e) => {
    const idParrafo = e.dataTransfer.getData("id");
    const parrafo = document.getElementById(idParrafo);
    seccion.appendChild(parrafo);
  });
});

const papelera = document.querySelector(".papelera");

papelera.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
});

papelera.addEventListener("drop", (e) => {
  const id_parrafo = e.dataTransfer.getData("id");
  document.getElementById(id_parrafo).remove();
});

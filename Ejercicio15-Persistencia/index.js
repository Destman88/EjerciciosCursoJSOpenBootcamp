const nombre = "Derick";
const apellido = "Maitland";

const datos = {
  nombre,
  apellido,
};

//sessionStorage.setItem("datos", JSON.stringify(datos));
//localStorage.setItem("datos", JSON.stringify(datos));

const expira = new Date();
document.cookie =
  "datos" +
  JSON.stringify(datos) +
  "expires=" +
  new Date(expira.getTime() + 2 * 60000);

console.log(new Date(expira.getTime() + 2 * 60000));

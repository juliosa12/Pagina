/* alert('alert desde un archivo externo');
prompt("digite un mensaje") */

let variable = "true";
var variable2 = 1;
const constante = 12;
let array = [2, 3, "gdfg", true];
let objetos = {
  nombre:"pepe",
  apellido:"sarmiento",
  edad:12,
  notas: [12,15,6]
}
console.log('objetos :>> ', objetos);

/* if: else */
/* let nota = prompt("Digite su nota");


if (nota <=10) {
  console.log('El alumno esta desaprobado con nota :' + nota);
} else {
  console.log('El alumno esta aprobado con nota :' + nota);
}
 */
/* foreach */

/* let diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];

console.log(">>>>>>>>>>>>>>>> FOREACH >>>>>>>>>>>>>>>>>>>>");

diasDeLaSemana.forEach((dias, index) => {
  console.log('dias :>> ', dias, "indice:", index);
});
console.log(">>>>>>>>>>>>>>>> FOR >>>>>>>>>>>>>>>>>>>>");

for (let index = 0; index < diasDeLaSemana.length; index++) {
  console.log('dias :>> ', diasDeLaSemana[index]);  
}
 */

/* funciones */

function sumaDosNumeros(mumero1, numero2) {
  let suma = parseFloat(mumero1) + parseFloat(numero2);
  return suma;
}

let total = sumaDosNumeros("10", 20);
console.log('total :>> ', total);

const sumaDosNumeros2 = (mumero1, numero2) => {
  let suma = parseFloat(mumero1) + parseFloat(numero2);
  return suma;
}

let total2 = sumaDosNumeros2(50, 10);
console.log('total2 :>> ', total2);

/* manipulacion del DOM */

/* funciones para obtener elementos del DOM */
/* por id */
let elemento = document.getElementById("p-4");
/* console.log('elemento :>> ', elemento); */

/* por clase */
let elemento2 = document.getElementsByClassName("header-cabecera");
/* console.log('elemento2 :>> ', elemento2); */

/* por clase */
let elemento3 = document.querySelector(".main-clase");
/* console.log('elemento3 :>> ', elemento3); */

let elemento4 = document.querySelector(".main-clase article [data-section] .h2-custom");
/* console.log('elemento4 :>> ', elemento4); */

let elemento5 = document.querySelectorAll("li");
/* console.log('elemento5 :>> ', elemento5); */


let parrafo = document.querySelector(".dom-p");
console.log('parrafo :>> ', parrafo);
parrafo.textContent = "ESTE ES UN VALOR PERSONALIZADO 2";
parrafo.setAttribute("data-personalizado", "custom");
parrafo.setAttribute("id", "esteEsMiIDPersonalizado");
//parrafo.classList.add("color-rojo")
parrafo.style.setProperty("background-color", "green");



/* const ejecutarEvento = () => {

  let parrafo = document.querySelector(".dom-p");
  console.log('parrafo :>> ', parrafo);
  parrafo.textContent = "ESTE ES UN VALOR PERSONALIZADO 2";
} */

/* fetch y ajax */

const obtenerData = () => {

  fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    

} 

obtenerData();

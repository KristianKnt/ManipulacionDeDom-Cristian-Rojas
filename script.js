//Tarea 1
const cambiarEstilo = document.getElementById("botonEstilo");

// creamor la funcion click para cambiar el estilo del parrafo
cambiarEstilo.addEventListener("click", function() {
    const elemento = document.getElementById("parrafo");
    elemento.style.backgroundColor = "red";
    elemento.style.color = "darkblue";
    elemento.style.fontSize = "20px";
});

//Tarea 2

function obtenerValoresFormulario(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtener los valores de los inputs
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    // Imprimir los valores en la consola
    console.log("First Name:", fname);
    console.log("Last Name:", lname);
}

// Agregar el evento submit al formulario
const form = document.getElementById("form1");
form.addEventListener("submit", obtenerValoresFormulario); 


//Tarea 3
function mostrarAlerta() {
    const obtenerEnlace = document.querySelectorAll('a');
    const numeroTotal = obtenerEnlace.length;
    const primerEnlace = obtenerEnlace[0];
    const ultimoEnlace = obtenerEnlace[numeroTotal - 1];
    console.log(`Número total de enlaces: ${numeroTotal}`);
    console.log(`Primer enlace: ${primerEnlace}`);
    console.log(`Último enlace: ${ultimoEnlace}`);    

   alert(`Número total de enlaces: ${numeroTotal}\nPrimer enlace: ${primerEnlace}\nÚltimo enlace: ${ultimoEnlace}`);

}

const enlace = document.getElementById("botonEnlaces");
enlace.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace navegue a otra página
    mostrarAlerta();
});
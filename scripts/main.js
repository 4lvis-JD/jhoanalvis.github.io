const pagTitle = document.querySelector("h1");
pagTitle.textContent= "Los Robots y la IA, pero con javascript";

let miImage = document.querySelector("img");
miImage.onclick = function() {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/images.jpeg") {
        miImage.setAttribute("src", "images/image812.jpeg");
    } 
    else {
        miImage.setAttribute("src", "images/images.jpeg");
    }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function establecerNombreDeUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (!miNombre) {
        establecerNombreDeUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.innerHTML = "Excelente servicio, " + miNombre;
    }
}

if (!localStorage.getItem("nombre")) {
    establecerNombreDeUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Excelente servicio, " + nombreAlmacenado + ".";
}

miBoton.onclick = function() {
    establecerNombreDeUsuario();
};
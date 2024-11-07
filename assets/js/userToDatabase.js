document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const formData = new FormData(this); // Crea un FormData con los datos del formulario

    fetch("assets/php/usuario.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("resultadoUser").innerHTML = data; // Muestra el resultado en el div "resultado"
    })
    .catch(error => console.error("Error:", error));
});

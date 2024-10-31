document.getElementById("toDatos").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "block";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "350px";
});
document.getElementById("toInicio").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "block";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "350px";
});
document.getElementById("toVivienda").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "block";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "500px";
});
document.getElementById("toVuelos").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vuelos").style.display = "block";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "350px";
});
document.getElementById("toCoche").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "block";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "350px";
});
document.getElementById("toMoto").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "block";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "350px";
});
document.getElementById("toBondi").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "block";
  document.getElementById("resultados").style.display = "none";
  document.getElementsByClassName("calcDiv")[0].style.height = "500px";
});
document.getElementById("toResultados").addEventListener("click", function (e) {
  e.preventDefault();
  let totalFinal = 0;
  totalFinal =
    totalEmissionsAuto +
    totalEmissionsMoto +
    totalEmissionsViv +
    totalEmissionsVuelos / 1000 +
    totlaEmissionsBondi;

  let element = document.getElementById("totalFinal");
  element.innerHTML = "Huella Total: " + totalFinal + " toneladas de CO2";

  fetch("assets/php/footprint.php")
    .then((response) => response.json())
    .then((data) => {
      let country = data.country; // Get the value of x from the response
      console.log("country", country); // Use x in your JavaScript
    })
    .catch((error) => console.error("Error fetching x:", error));

  /*switch (country) {
    case 4.2:
      console.log("hola");
      break;
  }*/

  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "block";
  document.getElementsByClassName("calcDiv")[0].style.height = "500px";
});

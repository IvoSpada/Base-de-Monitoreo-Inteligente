let FK = 0;
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

  totalFinal = totalEmissionsAuto + totalEmissionsMoto + totalEmissionsViv + totalEmissionsVuelos / 1000 + totlaEmissionsBondi;
  sendToDatabase();

  let element = document.getElementById("totalFinal");
  element.innerHTML = "Huella Total: " + totalFinal + " toneladas de CO2";

  document.getElementById("datos").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("vivienda").style.display = "none";
  document.getElementById("vuelos").style.display = "none";
  document.getElementById("coche").style.display = "none";
  document.getElementById("moto").style.display = "none";
  document.getElementById("bondi").style.display = "none";
  document.getElementById("resultados").style.display = "block";
  document.getElementsByClassName("calcDiv")[0].style.height = "300px";


});

function sendToDatabase() {
FK = FK + 1;

const emissionsData = {
  totalEmissionsAuto: totalEmissionsAuto,
  totalEmissionsMoto: totalEmissionsMoto,
  totalEmissionsViv: totalEmissionsViv,
  totalEmissionsVuelos: totalEmissionsVuelos,
  totalEmissionsBondi: totlaEmissionsBondi,
  foreignKey: FK
};

fetch('assets/php/saveFootprint.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(emissionsData)
})
.then(response => {
  return response.text();  // Obtener la respuesta como texto
})
.then(text => {
  console.log('Respuesta del servidor:', text); // Ver qué está devolviendo el servidor
})
.catch(error => {
  console.error('Error:', error);
});


}
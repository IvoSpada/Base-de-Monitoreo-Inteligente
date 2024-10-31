let totalEmissionsVuelos = 0;

document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.querySelector("#vuelos .calculate-button");
  calculateButton.addEventListener("click", calculateFlightEmissions);
});

function calculateFlightEmissions() {
  let distance =
    parseInt(document.getElementById("distanciaVuelos").value) || 1;
  let placeholder = document.getElementById("classVuelos") || 0;
  let flightClass = placeholder.value;
  let numberOfFlights =
    parseInt(document.getElementById("cantVuelos").value) || 1;

  //console.log(distance);
  //console.log(flightClass); // debugs
  //console.log(numberOfFlights);

  // Example emission factors (REPLACE WITH ACCURATE ONES)
  const baseEmissionFactor = 0.1; // kgCO2e per km
  const classFactors = {
    economy: 1,
    business: 1.5,
    firstClass: 2,
  };

  // console.log(classFactors[flightClass]); // debug

  let emissionsVuelos =
    distance * baseEmissionFactor * numberOfFlights * classFactors[flightClass];
  totalEmissionsVuelos += emissionsVuelos;

  console.log(emissionsVuelos);
  console.log(totalEmissionsVuelos); // debug

  let resultElement = document.querySelector("#vuelos .calculoVuelos p");
  resultElement.textContent = `Huella Total de Vuelos = ${(
    totalEmissionsVuelos / 1000
  ).toFixed(2)} toneladas de CO2`;

  let elementVuelos = document.getElementById("finalVuelos");
  elementVuelos.innerHTML = (totalEmissionsVuelos / 1000) + " toneladas de CO2";

  clearInputFieldsVuelos();
}

function clearInputFieldsVuelos() {
  document.getElementById("distanciaVuelos").value = "";
  document.getElementById("cantVuelos").value = "";
}
// URL de la API que devuelve el JSON
const url = 'http://bim.com/assets/php/obtenerUltimoFK.php';
const url2 = 'http://bim.com/assets/php/obtenerUltimoNombre.php';
// Función para obtener el último valor de la FK y actualizar el contador con animación
async function obtenerUltimoValorFK() {
    try {
        const response = await fetch(url); // Realizamos la solicitud GET
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json(); // Parseamos la respuesta como JSON
        const ultimoValorFK = parseInt(data.id_huella); // Obtenemos el último valor de FK
        
        const contadorElement = document.getElementById('contadorUsuarios');
        contadorElement.classList.add('titulo__bim'); // Agregamos la clase 'titulo__bim'

        // Función para contar de forma controlada
        function animateCounter(targetValue) {
            let count = 1; // Empezamos el contador desde 1
            function updateCounter() {
                contadorElement.textContent = `Huellas calculadas: ${count}`;
                
                if (count < targetValue) {
                    // Incremento pequeño al inicio, incrementando más al acercarse
                    count += Math.ceil((targetValue - count) / 8);
                    
                    // Controla la velocidad: lenta al inicio, rápida en medio, y más lenta al final
                    const delay = Math.min(100, Math.max(30, (targetValue - count) / targetValue * 200));
                    
                    setTimeout(updateCounter, delay); // Llamada recursiva
                } else {
                    contadorElement.textContent = `Huellas calculadas: ${targetValue}`;
                }
            }
            updateCounter();
        }

        // Llamamos a la función de animación
        animateCounter(ultimoValorFK);
    } catch (error) {
        console.error('Error al obtener el valor de la FK:', error);
    }
}

// Llamamos a la función para actualizar el contador


async function obtenerUltimoNombre() {
    try {
        const response = await fetch(url2); // Realizamos la solicitud GET
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json(); // Parseamos la respuesta como JSON
        const ultimoNombre = (data.nombre); // Obtenemos el último valor de FK

        const mostrador = document.getElementById('mostradorUsuario');
        mostrador.classList.add('titulo__bim'); // Agregamos la clase 'titulo__bim'
        mostrador.textContent = `Ultimo Usuario: ${ultimoNombre}`;

        console.log(ultimoNombre);
    } catch (error) {
        console.error('Error al obtener el valor de la FK:', error);
    }
}
// Llamamos a la función para actualizar el contador

obtenerUltimoNombre();
obtenerUltimoValorFK();
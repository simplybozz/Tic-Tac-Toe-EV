// Obtener los elementos de los botones
const botonCPU = document.getElementById('botonCPU');
const botonLocal = document.getElementById('botonLocal');

// Obtener los sonidos
const sonidoBtn = document.getElementById('sonidoBtn');

// Asignar eventos a los botones para reproducir sonido
botonLocal.addEventListener('click', function(event) {
event.preventDefault();
sonidoBtn.volume = 1;
sonidoBtn.play();
setTimeout(() => {
    window.location.href = "../landings/nomJugadores.html"; 
}, 500); 
});

botonCPU.addEventListener('click', function(event) {
event.preventDefault();
sonidoBtn.volume = 1;
sonidoBtn.play();
setTimeout(() => {
    window.location.href = "../landings/nomJugador.html";
}, 500); 
});
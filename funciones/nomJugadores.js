
// Obtener los elementos de los botones
const botonIniciar = document.getElementById('btnIniciar');
const botonVolver = document.getElementById('btnVolver');

// Obtener los sonidos
const sonidoBtn = document.getElementById('sonidoBtn');

// Asignar eventos a los botones para reproducir sonido
botonVolver.addEventListener('click', function(event) {
    event.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    setTimeout(() => {
        window.location.href = "../landings/menuPrincipal.html";
    }, 500); 
});

botonIniciar.addEventListener('click', function(event) {
    event.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    setTimeout(() => {
        // Aquí puedes redirigir después de guardar los nombres, si lo necesitas
    window.location.href = "../landings/juego.html";
    }, 500); 
});

// Referencias a los inputs de los nombres
const nombre1 = document.getElementById('nombre1');
const nombre2 = document.getElementById('nombre2');

// Asignar evento al botón para guardar los nombres en localStorage
botonIniciar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto

    const nombreJug1 = nombre1.value;
    const nombreJug2 = nombre2.value;
    
    if (nombreJug1 && nombreJug2) {  // Verificar que los campos no estén vacíos
        localStorage.setItem('nombre1', nombreJug1); // Guardar el nombre del jugador 1 en localStorage
        localStorage.setItem('nombre2', nombreJug2); // Guardar el nombre del jugador 2 en localStorage
    } else {
        console.log('Ambos nombres deben estar completos.');
    }
});

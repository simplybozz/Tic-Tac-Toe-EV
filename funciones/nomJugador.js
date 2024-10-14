    // Obtener los elementos de los botones
    const botonIniciarCPU = document.getElementById('btnIniciarCPU');
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

    botonIniciarCPU.addEventListener('click', function(event) {
    event.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    setTimeout(() => {
        window.location.href = "../landings/juegoCPU.html";
    }, 500); 
});

// Referencias a los inputs de los nombres
const nombre = document.getElementById('nombre');

// Asignar evento al botón para guardar los nombres en localStorage
botonIniciarCPU.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto

    const nombreJug = nombre.value;
    
    if (nombreJug) {  // Verificar que los campos no estén vacíos
        localStorage.setItem('nombre', nombreJug); // Guardar el nombre del jugador 1 en localStorage
    } else {
        console.log('Ambos nombres deben estar completos.');
    }
});



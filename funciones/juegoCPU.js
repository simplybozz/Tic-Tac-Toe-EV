const h1NombreJug1 = document.getElementById("nombreJug1");

const avatar1 = document.getElementById("inicialesJug1");

const avatarFondo1 = document.getElementById("inicialesJugador1Fondo");

const avatarModalVic1 = document.getElementById("inicialesJugador1Modal");

const avatarModalDer1 = document.getElementById("inicialesJugador1ModalD");

const avatarModalEmp1 = document.getElementById("inicialesJugador1Mod");

const nombreJugador1 = localStorage.getItem('nombre');

h1NombreJug1.innerHTML = nombreJugador1;

// Función para obtener iniciales del nombre
function getInitials(nombre) {
const words = nombre.trim().split(' ');
const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
return initials;
}

avatar1.innerHTML = getInitials(nombreJugador1);

avatarFondo1.innerHTML = getInitials(nombreJugador1);

avatarModalVic1.innerHTML = getInitials(nombreJugador1);

avatarModalDer1.innerHTML = getInitials(nombreJugador1)

avatarModalEmp1.innerHTML = getInitials(nombreJugador1);

//Sonidos

// Obtener los sonidos
const sonidoBtn = document.getElementById('sonidoBtn');
const sonidoVictoria = document.getElementById('sonidoVictoria');
const sonidoEmpate = document.getElementById('sonidoEmpate');
const sonidoDerrota = document.getElementById('sonidoDerrota');


// Boton volver
const botonVolver = document.getElementById('btnVolver');

botonVolver.addEventListener('click', function(event) {
    event.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    setTimeout(() => {
        window.location.href = "../landings/nomJugador.html";
    }, 500); 
    localStorage.removeItem('nombre'); 
});


//Modal Reiniciar
const openModalRei = document.querySelector('.btnReiniciar');
const cerrarModalRei = document.querySelector('.btnCancelar');
const reiniciarPart = document.querySelector('.btnReiniciarModal');

openModalRei.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    mostrarModal('modalReiniciar');
});

cerrarModalRei.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    cerrarModal('modalReiniciar');
});

reiniciarPart.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    reiniciarPartida();
    cerrarModal('modalReiniciar');

    puntajeJug1 = 0;
    document.getElementById('puntajeJug1').innerText = `${puntajeJug1} Ganadas`;
    document.getElementById('puntajeJug1Modal').innerText = `${puntajeJug1} Ganadas`;
    document.getElementById('puntajeJug1ModalD').innerText = `${puntajeJug1} Ganadas`;
    document.getElementById('puntajeJug1Mod').innerText = `${puntajeJug1} Ganadas`;

    puntajeJug2 = 0;
    document.getElementById('puntajeJug2').innerText = `${puntajeJug2} Ganadas`;
    document.getElementById('puntajeJug2Modal').innerText = `${puntajeJug2} Ganadas`;
    document.getElementById('puntajeJug1ModalD').innerText = `${puntajeJug1} Ganadas`;
    document.getElementById('puntajeJug2Mod').innerText = `${puntajeJug2} Ganadas`;

    empate = 0;
    document.getElementById('puntajeEmpate').innerText = `${empate} Empates`;
    document.getElementById('puntajeEmpateModal').innerText = `${empate} Empates`;
    document.getElementById('puntajeEmpateModalD').innerText = `${empate} Empates`;
    document.getElementById('puntajeEmpateMod').innerText = `${empate} Empates`;
});


//Modal Victoria
const proxRound = document.querySelector('.btnProxModal');
const cerrar = document.querySelector('.btnSalirModal');

proxRound.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    proxPartida();
    cerrarModal('modalVictoria');
    cerrarModal('modalEmpate');
});

cerrar.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    cerrarModal('modalVictoria');
    cerrarModal('modalEmpate');
    setTimeout(() => {
        window.location.href = "../landings/menuPrincipal.html";
    }, 500); 
    localStorage.removeItem('nombre'); 
});


//Modal Derrota
const proxRoundD = document.querySelector('.btnProxModalD');
const cerrarD = document.querySelector('.btnSalirModalD');

proxRoundD.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    proxPartida();
    cerrarModal('modalVictoria');
    cerrarModal('modalDerrota');
    cerrarModal('modalEmpate');
});

cerrarD.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    cerrarModal('modalVictoria');
    cerrarModal('modalDerrota');
    cerrarModal('modalEmpate');
    setTimeout(() => {
        window.location.href = "../landings/menuPrincipal.html";
    }, 500); 
    localStorage.removeItem('nombre'); 
});


//Modal empate
const proxRo = document.getElementById('btnProxModal');
const cerrarEm = document.getElementById('btnSalirModal');

proxRo.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    proxPartida();
    cerrarModal('modalVictoria');
    cerrarModal('modalEmpate');
});

cerrarEm.addEventListener('click', (e)=>{
    e.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    cerrarModal('modalVictoria');
    cerrarModal('modalEmpate');
    setTimeout(() => {
        window.location.href = "../landings/menuPrincipal.html";
    }, 500);
    localStorage.removeItem('nombre'); 
});


//Funcionalidad de juego

// Función para abrir un modal (adaptada a tus IDs existentes)
function mostrarModal(claseModal) {
    const modal = document.querySelector(`.${claseModal}`);
    modal.classList.add('modal--show');

}

// Función para cerrar un modal
function cerrarModal(claseModal) {
    const modal = document.querySelector(`.${claseModal}`);
    modal.classList.remove('modal--show');
}

// Inicializar turno y variables de control
let turnoActual = 'X';  // X comienza primero
let ganador = false;    // Controla si hay un ganador

let puntajeJug1 = 0;
let puntajeJug2 = 0;
let empate = 0;

// Función para alternar el turno
function cambiarTurno() {
    turnoActual = (turnoActual === 'X') ? 'O' : 'X';
}

// Función para manejar el clic en una celda
function clickCelda(celda) {
    if (ganador) {
        alert('El juego ha terminado.');
        return;
    }

    sonidoBtn.volume = 1;
    sonidoBtn.play();

    if (celda.innerHTML === '') {
        celda.innerHTML = '<img src="../recursos/imgs/equisJugador.png" class="x" alt="X">';
        verificarGanador(turnoActual);  // Verificamos si hay un ganador después de la jugada del humano
        
        if (!ganador) {  // Solo cambiar de turno si no hay un ganador
            cambiarTurno();
            setTimeout(jugadaCPU, 500);  // Espera un poco antes de que la IA juegue
        }
    } else {
        alert('Esa celda ya está ocupada. Elige otra.');
    }
}

// Función para verificar si hay un ganador
function verificarGanador(turnoActual) {
    const celdas = document.querySelectorAll('.celda');
    let hayGanador;

    const combinacionesGanadoras = [
        [0, 1, 2], // Filas
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Columnas
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonales
        [2, 4, 6]
    ];

    combinacionesGanadoras.forEach(combinacion => {
        const [a, b, c] = combinacion;
        const celdaA = celdas[a].innerHTML;
        const celdaB = celdas[b].innerHTML;
        const celdaC = celdas[c].innerHTML;

        if (celdaA && celdaA === celdaB && celdaA === celdaC) {
            hayGanador = true;
            const jugadorGanador = document.getElementById("nombreJugadorModalVic");

            ganador = true;

            if(turnoActual === 'X'){
                mostrarModal('modalVictoria');
                puntajeJug1++;
                console.log(puntajeJug1);
                document.getElementById('puntajeJug1').innerText = `${puntajeJug1} Ganadas`;
                document.getElementById('puntajeJug1Modal').innerText = `${puntajeJug1} Ganadas`;
                document.getElementById('puntajeJug1ModalD').innerText = `${puntajeJug1} Ganadas`;
                document.getElementById('puntajeJug1Mod').innerText = `${puntajeJug1} Ganadas`;
                jugadorGanador.innerHTML = nombreJugador1;
                sonidoVictoria.volume = 0.3;
                sonidoVictoria.play();
            }
            else{
                mostrarModal('modalDerrota');
                puntajeJug2++;
                document.getElementById('puntajeJug2').innerText = `${puntajeJug2} Ganadas`;
                document.getElementById('puntajeJug2Modal').innerText = `${puntajeJug2} Ganadas`;
                document.getElementById('puntajeJug2ModalD').innerText = `${puntajeJug2} Ganadas`;
                document.getElementById('puntajeJug2Mod').innerText = `${puntajeJug2} Ganadas`;
                sonidoDerrota.volume = 0.3;
                sonidoDerrota.play();
            }
        }
    });

    // Si no hay ganador y todas las celdas están ocupadas, es un empate
    if (!hayGanador && Array.from(celdas).every(celda => celda.innerHTML !== '')) {
        mostrarModal('modalEmpate');
        const jugador1 = document.getElementById("nombreJugador1emp");
        jugador1.innerHTML = nombreJugador1;
        empate++; // Modal para empate
        document.getElementById('puntajeEmpate').innerText = `${empate} Empates`;
        document.getElementById('puntajeEmpateModal').innerText = `${empate} Empates`;
        document.getElementById('puntajeEmpateModalD').innerText = `${empate} Empates`;
        document.getElementById('puntajeEmpateMod').innerText = `${empate} Empates`;
        sonidoEmpate.volume = 1;
        sonidoEmpate.play();
    }
}

// Función para reiniciar el tablero y los estados del juego
function reiniciarPartida() {
    limpiarCeldas();

    // Reiniciar las variables del juego
    turnoActual = 'X'; // O el jugador que desees que empiece
    ganador = false;

    // Cerrar cualquier modal que esté activo
    cerrarModal('modalVictoria');
    cerrarModal('modalEmpate');
}

// Función para reiniciar el tablero para la siguiente partida
function proxPartida() {
    limpiarCeldas();

    // Reiniciar las variables del juego
    turnoActual = 'X'; // O el jugador que desees que empiece
    ganador = false;

    // Cerrar cualquier modal que esté activo
    cerrarModal('modalVictoria');
    cerrarModal('modalEmpate');
}

// Agregar eventos a las celdas
const celdas = document.querySelectorAll('.celda');
celdas.forEach(celda => {
    celda.addEventListener('click', function() {
        clickCelda(celda);
    });
});

// Función para la IA (CPU)
function jugadaCPU() {
    if (ganador) return;

    const celdas = document.querySelectorAll('.celda');
    let celdasVacias = [];

    celdas.forEach((celda, indice) => {
        if (celda.innerHTML === '') {
            celdasVacias.push(indice);
        }
    });

    // Elige un movimiento aleatorio para la IA
    if (celdasVacias.length === 0) return;  // No hay jugadas posibles
    const indiceAleatorio = Math.floor(Math.random() * celdasVacias.length);
    const eleccionCPU = celdasVacias[indiceAleatorio];
    celdas[eleccionCPU].innerHTML = '<img src="../recursos/imgs/circuloJugador.png" class="o" alt="O">';

    verificarGanador('O');  // Verificar si la IA ha ganado
    cambiarTurno();
}

// Cierra el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    const modalVictoria = document.querySelector('.modalVictoria');
    const modalEmpate = document.querySelector('.modalEmpate');

    if (event.target === modalVictoria) {
        modalVictoria.style.display = "none";
    }

    if (event.target === modalEmpate) {
        modalEmpate.style.display = "none";
    }
}

function limpiarCeldas(){
    const celdas = document.querySelectorAll('.celda');

    // Limpiar todas las celdas
    celdas.forEach(celda => {
        celda.innerHTML = ''; // Quitar el contenido de la celda (imagen o texto)
    });
}

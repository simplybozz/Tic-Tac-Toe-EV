const h1NombreJug1 = document.getElementById("nombreJug1");
const h1NombreJug2 = document.getElementById("nombreJug2");
const avatar1 = document.getElementById("inicialesJug1");
const avatar2 = document.getElementById("inicialesJug2");

const avatarFondo1 = document.getElementById("inicialesJugador1Fondo");
const avatarFondo2 = document.getElementById("inicialesJugador2Fondo");

const avatarModalVic1 = document.getElementById("inicialesJugador1Modal");
const avatarModalVic2 = document.getElementById("inicialesJugador2Modal");

const avatarModalEmp1 = document.getElementById("inicialesJugador1Mod");
const avatarModalEmp2 = document.getElementById("inicialesJugador2Mod");

const nombreJugador1 = localStorage.getItem('nombre1');
const nombreJugador2 = localStorage.getItem('nombre2');

h1NombreJug1.innerHTML = nombreJugador1;
h1NombreJug2.innerHTML = nombreJugador2;

// Función para obtener iniciales del nombre
function getInitials(nombre) {
const words = nombre.trim().split(' ');
const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
return initials;
}

avatar1.innerHTML = getInitials(nombreJugador1);
avatar2.innerHTML = getInitials(nombreJugador2);

avatarFondo1.innerHTML = getInitials(nombreJugador1);
avatarFondo2.innerHTML = getInitials(nombreJugador2);

avatarModalVic1.innerHTML = getInitials(nombreJugador1);
avatarModalVic2.innerHTML = getInitials(nombreJugador2);

avatarModalEmp1.innerHTML = getInitials(nombreJugador1);
avatarModalEmp2.innerHTML = getInitials(nombreJugador2);

//Sonidos

// Obtener los sonidos
const sonidoBtn = document.getElementById('sonidoBtn');
const sonidoVictoria = document.getElementById('sonidoVictoria');
const sonidoEmpate = document.getElementById('sonidoEmpate');


// Boton volver
const botonVolver = document.getElementById('btnVolver');

botonVolver.addEventListener('click', function(event) {
    event.preventDefault();
    sonidoBtn.volume = 1;
    sonidoBtn.play();
    setTimeout(() => {
        window.location.href = "../landings/nomJugadores.html";
    }, 500); 
    localStorage.removeItem('nombre1'); 
    localStorage.removeItem('nombre2'); 
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
    document.getElementById('puntajeJug1Mod').innerText = `${puntajeJug1} Ganadas`;

    puntajeJug2 = 0;
    document.getElementById('puntajeJug2').innerText = `${puntajeJug2} Ganadas`;
    document.getElementById('puntajeJug2Modal').innerText = `${puntajeJug2} Ganadas`;
    document.getElementById('puntajeJug2Mod').innerText = `${puntajeJug2} Ganadas`;

    empate = 0;
    document.getElementById('puntajeEmpate').innerText = `${empate} Empates`;
    document.getElementById('puntajeEmpateModal').innerText = `${empate} Empates`;
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
    localStorage.removeItem('nombre1'); 
    localStorage.removeItem('nombre2'); 
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
    localStorage.removeItem('nombre1'); 
    localStorage.removeItem('nombre2'); 
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

// Función para manejar el click en una celda
function clickCelda(celda) {
    if (ganador) {
        alert('El juego ha terminado.');
        return;
    }

    sonidoBtn.volume = 1;
    sonidoBtn.play();

    // Verifica si la celda ya está ocupada
    if (celda.innerHTML === '') {
        if (turnoActual === 'X') {
            celda.innerHTML = '<img src="../recursos/imgs/equisJugador.png" class="x" alt="X">';
        } else {
            celda.innerHTML = '<img src="../recursos/imgs/circuloJugador.png" class="o" alt="O">';
        }

        // Verificar si hay un ganador después del turno
        verificarGanador(turnoActual);
        
        // Cambiar de turno
        cambiarTurno();
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
            mostrarModal('modalVictoria'); // Modal para victoria
            const jugadorGanador = document.getElementById("nombreJugadorModalVic");

            ganador = true;

            if(turnoActual === 'X'){
                puntajeJug1++;
                console.log(puntajeJug1);
                document.getElementById('puntajeJug1').innerText = `${puntajeJug1} Ganadas`;
                document.getElementById('puntajeJug1Modal').innerText = `${puntajeJug1} Ganadas`;
                document.getElementById('puntajeJug1Mod').innerText = `${puntajeJug1} Ganadas`;
                jugadorGanador.innerHTML = nombreJugador1;
                sonidoVictoria.volume = 0.3;
                sonidoVictoria.play();
            }
            else{
                puntajeJug2++;
                jugadorGanador.innerHTML = nombreJugador2;
                document.getElementById('puntajeJug2').innerText = `${puntajeJug2} Ganadas`;
                document.getElementById('puntajeJug2Modal').innerText = `${puntajeJug2} Ganadas`;
                document.getElementById('puntajeJug2Mod').innerText = `${puntajeJug2} Ganadas`;
                sonidoVictoria.volume = 0.3;
                sonidoVictoria.play();
            }
        }
    });

    // Si no hay ganador y todas las celdas están ocupadas, es un empate
    if (!hayGanador && Array.from(celdas).every(celda => celda.innerHTML !== '')) {
        mostrarModal('modalEmpate');
        const jugador1 = document.getElementById("nombreJugador1emp");
        const jugador2 = document.getElementById("nombreJugador2emp");
        jugador1.innerHTML = nombreJugador1;
        jugador2.innerHTML = nombreJugador2;
        empate++; // Modal para empate
        document.getElementById('puntajeEmpate').innerText = `${empate} Empates`;
        document.getElementById('puntajeEmpateModal').innerText = `${empate} Empates`;
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




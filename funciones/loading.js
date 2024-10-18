// Ejecutar la función cuando la ventana se haya cargado completamente
window.onload = function() {

    // Obtener el elemento de la barra de progreso
    const progressFill = document.querySelector('.progreso'); 

    let progress = 0;  // Iniciar el progreso en 0

    // Crear un intervalo que incrementa el progreso cada 20ms
    const interval = setInterval(() => {
        progress += 1;  // Incrementar el progreso en 1 cada vez
        progressFill.style.width = `${progress}%`;

        // Si el progreso alcanza o supera el 100%, detener el intervalo y redirigir
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "landings/menuPrincipal.html";
        }
    }, 20);  // Intervalo de 20 milisegundos
};
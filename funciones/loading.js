window.onload = function() {

    const progressFill = document.querySelector('.progreso');

    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressFill.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "menuPrincipal.html";
        }
    }, 20);
};
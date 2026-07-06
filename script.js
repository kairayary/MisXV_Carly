// Fecha del evento actualizada: 15 de Agosto de 2026[cite: 1, 2]
const target = new Date('2026-08-15T20:30:00');

const timerInterval = setInterval(() => {
    let d = target - new Date();
    if (d < 0) {
        document.getElementById('timer').innerHTML = `<h3>¡Llegó el gran día!</h3>`;
        clearInterval(timerInterval);
        return;
    }
    
    let s = Math.floor(d / 1000);
    let days = Math.floor(s / 86400);
    s %= 86400;
    let h = Math.floor(s / 3600);
    s %= 3600;
    let m = Math.floor(s / 60);
    let sec = s % 60;
    
    document.getElementById('timer').innerHTML = `<h3>${days}d : ${h}h : ${m}m : ${sec}s</h3>`;
}, 1000);

// Función de copiado rápido con feedback visual en el botón
function copyText(id) {
    const textToCopy = document.getElementById(id).textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Buscamos el botón que ejecutó la acción para darle feedback temporal
        const button = document.querySelector(`#${id}`).parentElement.nextElementSibling;
        const originalText = button.innerHTML;
        
        button.innerHTML = `<i class="fa-solid fa-check"></i> ¡Copiado!`;
        button.style.background = '#00f2fe';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}
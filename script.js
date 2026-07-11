
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

function copyText(id) {
    const textToCopy = document.getElementById(id).textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {

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

const music = document.getElementById("bgMusic");
const discoverBtn = document.getElementById("discoverBtn");
const musicBtn = document.getElementById("musicButton");

//let playing = false;

discoverBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play().then(() => {

            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        }).catch(err => console.log(err));

    }

});
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

    } else {
        music.pause();
        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';
    }
});
music.addEventListener("play", () => {
    musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';
});

const modal = document.getElementById("confirmModal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close-modal");
openModal.onclick = () => {
    modal.classList.add("active");
};

closeModal.onclick = () => {
    modal.classList.remove("active");
};

window.onclick = (e) => {
    if(e.target == modal){
       modal.classList.remove("active");
    }
};

document.getElementById("sendWhatsapp").onclick = () => {

    const nombre = document.getElementById("guestName").value.trim();
    const asistencia = document.getElementById("attendance").value;
    const personas = document.getElementById("guests").value;
    const mensaje = document.getElementById("message").value.trim();

    if(nombre===""){
        alert("Por favor ingresá tu nombre.");
        return;
    }

    const texto =
`✨ Confirmación de Asistencia ✨
  🎉XV de Carlymar🎉

Nombre:
${nombre}

Asistencia:
${asistencia}

Cantidad de personas:
${personas}

Mensaje:
${mensaje || "Sin mensaje"}

Muchas gracias.`;
    const telefono = "5491151046403";
    window.open(

`https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`,

"_blank"

);

};
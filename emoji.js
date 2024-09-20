// script.js

// Seleccionamos el elemento de audio y el emoji
const audio = document.getElementById('miAudio');
const playButton = document.getElementById('playAudio');

audio.volume = 1.0; // Valor entre 0.0 (silencio) y 1.0 (máximo)

// Agregamos un evento de clic al emoji
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Reproduce el audio
    } else {
        audio.pause(); // Pausa el audio
    }
});
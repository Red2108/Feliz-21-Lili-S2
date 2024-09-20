// script.js

// Seleccionamos el elemento de audio y el emoji
const audio = document.getElementById('miAudio');
var lyrics = document.querySelector("#lyrics");
const playButton = document.getElementById('playAudio');
// Sincronizar las letras con la canción

audio.volume = 1.0; // Valor entre 0.0 (silencio) y 1.0 (máximo)

// Agregamos un evento de clic al emoji
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Reproduce el audio
    } else {
        audio.pause(); // Pausa el audio
    }
});

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Asi que voy a amarte cada noche...", time: 0 }, // Cambié a 0
    { text: "como si fuera la ultima noche.", time: 2 }, // Cambié a 2
    { text: "Si el mundo se acabara...", time: 5 }, // Cambié a 5
    { text: "quisiera estar...", time: 8 }, // Cambié a 8
    { text: "A tu lado.", time: 10 }, // Sin cambio
    { text: "Si la fiesta se terminara...", time: 15 }, // Cambié a 15
    { text: "y nuestro tiempo en la tierra...", time: 17 }, // Sin cambio
    { text: "se acabara.", time: 20 }, // Cambié a 20
    { text: "Quisiera abrazarte...", time: 24 }, // Cambié a 24
    { text: "Solo por un momento🥺", time: 26 }, // Sin cambio
    { text: "Y morir", time: 28 }, // Sin cambio
    { text: "con una sonrisa.🥰", time: 31 }, // Cambié a 31
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 4 // Cambié a 4
    );

    if (currentLine) {
        // Calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // Aplica el efecto de aparición
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Cambié a 500 milisegundos para mayor frecuencia de actualización
setInterval(updateLyrics, 500);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
        "fadeOut 0.4s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
        titulo.style.display = "none";
    }, 500); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

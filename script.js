function abrirCarta() {
  // Mostrar contenido
  document.getElementById("contenido").style.display = "block";

  // Mensaje romántico
  document.getElementById("mensaje").innerHTML =
    "Eres lo más bonito que me ha pasado 💜🌷";

  // NO reproducir automáticamente aquí (GitHub lo bloquea)
}
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("botonAbrir").addEventListener("click", () => {

    document.getElementById("contenido").style.display = "block";

    document.getElementById("botonAbrir").style.display = "none";

    document.getElementById("mensaje").innerHTML =
      "Eres lo más bonito que me ha pasado 💜🌷";

  });

});


function playMusic() {
  let audio = document.getElementById("musica.mp3");

  if (audio.paused) {
    audio.play();
    document.getElementById("botonMusica").innerText =
      "⏸ Pausar música";
  } else {
    audio.pause();
    document.getElementById("botonMusica").innerText =
      "🎵 Música para ti";
  }
}

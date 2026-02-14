function abrirCarta() {
  // Mostrar contenido
  document.getElementById("contenido").style.display = "block";

  // Ocultar botón abrir
  document.getElementById("botonAbrir").style.display = "none";

  // Mensaje romántico
  document.getElementById("mensaje").innerHTML =
    "Eres lo más bonito que me ha pasado 💜🌷";
}

function playMusic() {
  let audio = document.getElementById("musica");

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

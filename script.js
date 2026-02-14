function abrirCarta() {
  // Mostrar contenido de la carta
  document.getElementById("contenido").style.display = "block";

  // Escribir mensaje romántico
  document.getElementById("mensaje").innerHTML =
    "Eres lo más bonito que me ha pasado 💜🌷";

  // 🎵 Reproducir música automáticamente al abrir
  let audio = document.getElementById("musica");
  audio.play();
}

function playMusic() {
  let audio = document.getElementById("musica");

  // Si está pausada, reproducir
  if (audio.paused) {
    audio.play();
    alert("🎶 Música activada para ti 💜");
  }
  // Si está sonando, pausar
  else {
    audio.pause();
    alert("⏸ Música pausada");
  }
}

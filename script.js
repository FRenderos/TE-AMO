function abrirCarta() {

  // Mostrar contenido
  document.getElementById("contenido").style.display = "block";

  // Ocultar botón abrir
  document.getElementById("botonAbrir").style.display = "none";

  // Texto completo
  let texto =
    "Eres lo más bonito que me ha pasado 💜🌷. Gracias por llegar a mi vida en el momento adecuado. Te amo como no tienes idea bebé... Ojalá que lo nuestro no sea temporal, sino para toda la vida. Te adoro.";

  let mensaje = document.getElementById("mensaje");

  // Reiniciar mensaje
  mensaje.innerHTML = "";
  mensaje.style.opacity = "1";

  let i = 0;

  // Animación tipo máquina de escribir
  let intervalo = setInterval(() => {

    mensaje.innerHTML += texto.charAt(i);
    i++;

    if (i >= texto.length) {
      clearInterval(intervalo);
    }

  }, 40);
}

/* ===== MÚSICA ===== */
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

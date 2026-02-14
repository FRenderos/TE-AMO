function abrirCarta() {

  // Mostrar contenido
  document.getElementById("contenido").style.display = "block";

  // Ocultar botón abrir
  document.getElementById("botonAbrir").style.display = "none";

  // Texto completo
  let texto =
    "Eres lo más bonito que me ha pasado 💜🌷. Gracias por llegar a mi vida en el momento adecuado. Te amo como no tienes idea bebé... Ojalá que lo nuestro no sea temporal, sino para toda la vida. Te adoro.";

  // Elemento donde irá el mensaje
  let mensaje = document.getElementById("mensaje");

  // Vaciar antes de escribir
  mensaje.innerHTML = "";

  // Animación bajando suave
  mensaje.style.position = "relative";
  mensaje.style.top = "-20px";
  mensaje.style.opacity = "0";

  // Contador de letras
  let i = 0;

  // Mostrar mensaje letra por letra
  let intervalo = setInterval(() => {

    mensaje.innerHTML += texto.charAt(i);
    i++;

    // Movimiento suave hacia abajo
    mensaje.style.top = (parseInt(mensaje.style.top) + 1) + "px";
    mensaje.style.opacity = "1";

    // Cuando termine el texto
    if (i >= texto.length) {
      clearInterval(intervalo);
    }

  }, 40); // velocidad (más bajo = más rápido)
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

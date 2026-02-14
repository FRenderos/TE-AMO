const texto = `Quién iba a pensar que un día éramos desconocidos y ahora celebramos nuestro primer 14 de febrero...

Gracias por hacerme más feliz y por devolver el brillo a mis ojos.
Te amo mucho Yamitha, que lo nuestro no sea solo algo temporal sino algo para toda la vida 💜

Yami, eres lo más bonito que me ha pasado.`

let i = 0;

function abrirCarta() {
  document.getElementById("botonAbrir").style.display = "none";
  document.getElementById("contenido").style.display = "block";

  const musica = document.getElementById("musica");
  musica.volume = 0.15;
  musica.play();

  escribir();
}

function escribir() {
  if (i < texto.length) {
    document.getElementById("mensaje").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, 40);
  }
}


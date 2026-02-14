// CORAZONES
for (let i = 0; i < 30; i++) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.body.appendChild(heart);
}

// CSS corazones
const style = document.createElement("style");
style.innerHTML = `
.heart {
  position: absolute;
  width: 10px;
  height: 10px;
  background: pink;
  transform: rotate(45deg);
  animation: float linear infinite;
}

.heart::before,
.heart::after {
  content: "";
  width: 10px;
  height: 10px;
  background: pink;
  border-radius: 50%;
  position: absolute;
}

.heart::before {
  top: -5px;
  left: 0;
}

.heart::after {
  left: -5px;
  top: 0;
}

@keyframes float {
  from {bottom: 0; opacity:1;}
  to {bottom: 100vh; opacity:0;}
}
`;
document.head.appendChild(style);

// BAJAR VOLUMEN
window.onload = () => {
  const musica = document.getElementById("musica");
  musica.volume = 0.2; // romántico suave
};


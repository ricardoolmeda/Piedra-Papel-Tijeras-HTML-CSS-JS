// Creamos las constantes
const buttons = document.querySelectorAll(".elecciones");
const miEleccionText = document.getElementById("miEleccion").querySelector("span");
const ordenadorEleccionText = document.getElementById("ordenadorEleccion").querySelector("span");
const resultadoText = document.getElementById("resultado-juego").querySelector("span");

// Opciones disponibles
const options = ["piedra", "papel", "tijeras"];

// Función para obtener una elección aleatoria del ordenador
function getordenadorEleccion() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Función para determinar el ganador
function determineWinner(jugador, ordenador) {
  if (jugador === ordenador) {
    return "¡Empate!";
  } else if (
    (jugador === "piedra" && ordenador === "tijeras") ||
    (jugador === "papel" && ordenador === "piedra") ||
    (jugador === "tijeras" && ordenador === "papel")
  ) {
    return "¡Ganaste!";
  } else {
    return "¡Perdiste!";
  }
}

const optionIcons = {
    piedra: "🪨",
    papel: "📄",
    tijeras: "✂️",
};

// Evento al hacer clic en una opción
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const miEleccion = button.getAttribute("data-choice");
    const ordenadorEleccion = getordenadorEleccion();
    const resultado = determineWinner(miEleccion, ordenadorEleccion);

    // Actualizar el DOM con los resultados
    miEleccionText.textContent = optionIcons[miEleccion] + " " + miEleccion;
    ordenadorEleccionText.textContent = optionIcons[ordenadorEleccion] + " " + ordenadorEleccion;
    resultadoText.textContent = resultado;
  });
});

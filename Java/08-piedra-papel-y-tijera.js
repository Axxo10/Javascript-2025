/* 

Crear un juego interactivo donde el usuario juega contra la computadora

Reglas:
Piedra vence tijera
Tijera vence papel
Papel vence a piedra

Si es lo mismoes empate

Opción aleatoria para la computadora

Comparar y determinar al ganador

Se van a usar

Variables
Condicionales
Generación de un numero aleatorio

*/

console.log("Es hora de programar🗣🗣🗣🔥🔥🔥")


//opciones del jugador
const opcionJugador = prompt("avr avr escoge");

// Opcion de la pompu 
const numeroAleatorio = Math.random();

console.log(numeroAleatorio)

let opcionComputadora;

//condicional
if(numeroAleatorio < 0.33){
opcionComputadora = "piedra";
} else if (numeroAleatorio < 0.66){
    opcionComputadora = "papel";
} else {
    opcionComputadora = "tijera";
}

//resultados
console.log("Piedra Papel o Tijera");
console.log("eleccion???: " + opcionJugador);
console.log("La pompu dice: " + opcionComputadora);
console.log("------------------------------------------")

//Determinar el ganador

let resultado;

if (opcionJugador === opcionComputadora) {
resultado = `Empateeeeee yeahhhh lets fucking goooo 🗣🗣🔥🔥 ${opcionJugador}`; 
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera") { resultado = `ganaaste, piedra rompio la tijera waos`;
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") { resultado = `ganaaste, piedra no soporto`;
} else if (opcionJugador ==="tijera" && opcionComputadora === "papel") { resultado = ` yay,cortaste`;
} else {
    resultado = `Jajjaj baboso :>`;
}

//
console.log(resultado)
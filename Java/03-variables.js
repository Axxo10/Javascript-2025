/*

Variables

Son contendores que almacenan datos. En JS se pueden declarar variables utilizando las palabras clave
 "var" "let" o "const"

 1. Declaración de variables

 "var" es la forma más antigua de declarar variables, tiene un alcanze global o de función y puede ser redéclarada y actualizada

 "Let" Introducida en ES6, esta tiene un alcanze de bloque y puede ser actualizada pero no redeclararse dentro del mismo alcance.

 "Const" Introducida en ES6, tiene un alcanze de bloque y no puede ser ni declarada ni redeclarada ni actualizada. Se utliza para valores que no pueden cambiar
*/

/*
Declaración con var
*/

var nombre = "Yukio";
console.log(nombre) // Yukio

nombre = "Yuki";

/* Declaración con let */

let edad = 21; 
console.log(edad)

edad = 22; //actualizacion
console.log(edad)

/* Declaración con const */

const pi = 3.1416;  
console.log(PI)
PI = 4.6738; //Error y no se puede actualizar
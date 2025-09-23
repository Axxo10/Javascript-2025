/* 
Operadores

Son simbolos que le indican al interprete que deben realizarse una opercion matematica, logica o relacional y producir un resultado.

1. Operadores aritmeticos

Se utilizan operaciones matematias basicas como la suma, resta, division y multiplicacion. */

/* 
+  Suma
-  restar
*  multiplicar
/  dividir
%  módulo (Residuo de una division)
++  incremento (suma 1 al valor)
--  decremento (resta 1 al valor)
*/

let a = 10;
let b = 5;

a + b;  // Expresión, reslutado = 16

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
a++;
console.log(a)
b--;
console.log(b)

/* 
2. Operadores de asignacion

estos operadores se utilizan para asignar alasvariables

= asignación
+= sumar y asignar
-= restar y asignar
*= multiplicar y asignar
%= modulo y asignar

*/

let c = 20;

c += 5;

console.log(c)

c += 5;
c -= 10;
c *= 2;
c /= 3;
c %= 3;

console.log(c)

/* 
 
3. operadores de comparación

estos operadores se utilizan para comparar dos valores y devolver un valor booleano ( True or false)

== igualdad ( compara solo el valor)
=== Igualdad estricta (esto comprara el valor y el tipo)
!= desigualdad (compara solo el valor)

*/

let d = 10;
let e = "10";

console.log(d == e);
console.log(d === e);
console.log(d != e);
console.log(d !== e);
console.log(d > 5);
console.log(d < 15);
console.log(d >- 10);
console.log(d <- 4)
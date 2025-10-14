/* 

    Arrelgos

    Un arreglo es una colección de datos, una lista de elementos.

    En JS los arreglos se definen utilizando los corchetes [] y los elementos internos se separan por comas ,

    Pueden conener el mismo tipo de dato o de diferentes tipos, incluso pueden contener arreglos anidados.

*/
let canciones = ["jigsaw falling into place - Radiohead", "Poison tree - Grouper", "Angel - Newdad", "Debris - Lorn"];
let edades = [21, 22, 32, 42];
let misDatos = ["Yukio",  21, true];
let coordenadas = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9]]

console.log(coordenadas)

/* 

lenght

Nos indica la cantidad de elementos que tenemos dentro del arreglo

para acceder a los datos de n arreglo, utilizamos un indice

*/

console.log("mi cancion favorita es..." + canciones[2] + misDatos);
console.log( "este dato esta adentro de un arreglo anidado" + coordenadas[1][2]);

/* 

metodos de los arreglos

push() agrega uno o mas elemntos al final del arreglo
pop() Elimina el utlimo elemento del ultimo arreglo y lo devuelve
shift() elimina el primer elemento del primer arreglo y lo devuelve
*/

console.log(canciones.length);

canciones.push("Loose cannon");

console.log(canciones.legth);

let ultimaCancion = canciones.pop();

console.log(canciones.length);
console.log(ultimaCancion);

let primeraCancion = canciones.shift();

console.log(canciones.length);
console.log(primeraCancion);

canciones.unshift("Angel - Newdad");
console.log(canciones.length);
let indiceCanciones = canciones.indexOf("Poison tree - Grouper");
console.log(indiceCanciones);

for ( k = 0; k < 5; k++) {
    console.log(canciones[k]);
}
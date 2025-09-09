/*

En JS existen varios tipos que se  pueden agrupar en dos categorias principales:
primitivos y complejos u objetos.
cada tipo de dato tiene sus propias caractersiticas y usos especificaos en la programacion


1. Primitivos
Datos básicos que no se consideran "objectos" y no tienen "metodos"

 number: Estos representan valores numericos, ya sean enteros o decimales (punto flotante)
  
 strings o cadenas de caracteres
 representan texto. El texto se color entre comillas dobles os simles "texto" 'texto'.

 booleans o boleanos:
 Representan un valor lógico que puede ser true o false

 undefined
 es el valor que se le asigna a una variable que a sido declarada pero no inicializada

 null
 Representa la ausencia intencional de una variable. es un valor que indica que una variable no tiene ningun valor asignado

 
*/
//primera en minuscula y las siguientes palabras empiezan en mayuscula//
let miNumero = 10
let miNumeroDecimal = 0.33

console.log(miNumero);
console.log(miNumeroDecimal);

//Strings//

let miNombre = 'Yukio'
let miApellido = 'Ramirez'
console.log(miNombre);
console.log(miNombre);

//boolean//
let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

//undefined//

let aprovareDesarollorApps;
console.log(aprovareDesarollorApps);

//null//

let dondeEstas = null;
console.log(dondeEstas);

/* 

Complejos o de datos

 array o arreglo
 un array es un conjunto de datos que se almacenan en una lista ordenada de elementos.
 los datos dentro de los arreglos se escriben entre corechetes [] y separados por comas ,

 object u objeto
 Un conjunto de multiples datos en pares 'clave'-'valor'
 estos objetos se escriben entre llaves {} y separados por comas ,

 function o funciones
 Es un tipo de dato que puede ser invocado, se declaran con la palabra reservada 'function' y el codigo que se ejecuta va entre llaves {}
 

 */

//array

let misSeries = ['Over The Garden Wall' , 'Arcane' , 'Jjk'];
let misNumeros = [10 , 12 , 19];
let canarios = [10 , 'kingdom come' , true];

console.log( misSeries[0] );
console.log( misNumeros[0] );
console.log( canarios[1] );

let perro = {
    nombre: 'doki',
    edad: 14,
    color: 'manchado',
    ladra: true,
    muerde: false,
};

console.log( perro.nombre );
console.log( perro.muerde );

//funciones
function saludar() {
    //codigo a ejecutar
    console.log("hola :>")
}

//llamamos a la función

saludar();
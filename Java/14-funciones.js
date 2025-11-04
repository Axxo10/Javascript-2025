//alert("Funciona las funciones")

/* 
Funciones

son bloques de codigo reutilizables que realizan una tarea especifica

1. Funcion declarada

es la forma mas comunde definir funciones. Se puede llamar a a la funcion antesde su definición debido al hoisting, es decir que se elevan en el contexto  de ejecucion

sintaxis:

function nombreFuncion() {
 //cuerpo de la funcion

 llamar:
}
 nombreFuncion();

*/

function saludar() {
    console.log("Todo menso todo baboso");
}

/* 

Funcion expresada (anonimas)

Este tipo de funciones es que se asignan a una variable

*/
const despedir = function() {
    console.log("bai bai")
}

const mensaje = () => {
    console.log("Im in lesbians with you");
}

function sumar(num1, num2) {
    console.log(`elresultado de la suma es; ${num1 + num2}`)
}




function saludos () {
    console.log(`Oa,soy ${nombres}`)
}


const multiplicar = function(num1 = 40, num2 = 2){
    console.log(`el resultado es ${num1} por ${num2} es ${num1*num2}`);
}

multiplicar();

const bienvenida = (usuario = `invitados`) => {
    if(usuario == `invitado`) {
        console.log(`que hace aqui nananan`)
    } else {
        console.log(`pasele pasele, con confianza ${usuario}`)
    }
} 

bienvenida();
bienvenida(`Yukio`);

function despedida() {
    return `adiooooh`
}
const resultado = despedida();

console.log(resultado)

const restar = (num1, num2) => num1 - num2;
restar(10,5);
/* 

objetos.

son colecciones de propiedade. Una propiedadesuna asciociacion entre un nombre (claveo key) y un valor (value).

los valores puede ser de distinos tipos, numeros, cadenas de texto, boleanos, arreglos, funciones...

stintasis

nombreObjeto{
//propiedades
 key: value,
 }
*/

const persona = {
    nombre: `Yukio`,
    apellido: `Ramirez`,
    edad: 21,
    esInvitado: true,
    monstros: [`Wendigo`, `skinwalker`, `The boiled one`],

    saludar: function() {
        console.log(`Holiiii, mi nombre es` + this.nombre + "y tengo" + this.edad + "Años")
    }

}

console.log(persona)

console.log(persona.nombre);

console.log("hola, mi nombre es " + persona.nombre + "" + persona.apellido + " Y tengo " + persona.edad + " años ");

console.log(persona.esInvitado);
if(persona.esInvitado == true) {
    console.log("puede pasar sisi")
} else {
    console.log("nanananan fuchi caca")
}

console.log(persona.monstros[0]);

persona.saludar();
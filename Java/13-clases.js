class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        alert(`Hola, soy ${this.nombre} y tengo ${this.edad}`)
    }
}

const persona1 = new Persona(`Yukio`, `21`);
const persona2 = new Persona(`Yuki`, `20`);
const persona3 = new Persona(`Kio`, `22`);

console.log(`El es ${persona1.nombre} y tiene ${persona1.edad}`);
console.log(`El es ${persona2.nombre} y tiene ${persona2.edad}`);
console.log(`El es ${persona3.nombre} y tiene ${persona3.edad}`);

persona1.saludar();
persona2.saludar();
persona3.saludar();
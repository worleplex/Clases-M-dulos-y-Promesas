export default class Persona {
    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
    }
    // metodo privado ou
    #generarId() {
        return Math.floor(Math.random() * 1000);
    }
    // metodo publico
    saludar() {
        return `Hola, soy ${this.nombre} (ID: ${this.#generarId()})`
    }
}
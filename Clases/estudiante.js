import Persona from "./persona.js";

export default class Estudiante extends Persona {
    constructor () {
        super();
        this.carrera = "";
    }

    estudiar() {
        return `${this.nombre} esta estudiando ${this.carrera}`
    }

    #calcularPromedio() {
        return 96;
    }

    verPromedio() {
        return `Promedio: ${this.#calcularPromedio()}`
    }
}
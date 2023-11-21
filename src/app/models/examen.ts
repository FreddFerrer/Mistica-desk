import { Materia } from "./materia";

export class Examen {
    id: number;
    nombre:  string;
    fecha: Date;
    materia: Materia;

    constructor(nombre: string, fecha: Date) {
        this.nombre = nombre;
        this.fecha = fecha;
    }
}

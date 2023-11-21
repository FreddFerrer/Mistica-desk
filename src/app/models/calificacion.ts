import { Examen } from "./examen";

export class Calificacion {
    id: number;
    nota: number;
    examen: Examen;

    constructor(nota: number) {
        this.nota = nota;
    }
}

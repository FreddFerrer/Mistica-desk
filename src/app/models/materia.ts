import { Alumno } from "./alumno";
import { Usuario } from "./usuario";

export class Materia {
    id: number;
    nombreMateria: string;
    docente: Usuario | null; 
    anoEscolar: string;
    turno: string;
    horarioEntrada: string;
    horarioSalida: string;
    alumnos: Alumno[] | null;

    constructor(nombreMateria: string, anoEscolar: string, turno: string, horarioEntrada: string, horarioSalida: string) {
        this.nombreMateria = nombreMateria;
        this.anoEscolar = anoEscolar;
        this.turno = turno;
        this.horarioEntrada = horarioEntrada;
        this.horarioSalida = horarioSalida;
    }
}

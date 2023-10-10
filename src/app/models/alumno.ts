import { Asistencia } from "./asistencia";
import { Calificacion } from "./calificacion";
import { Materia } from "./materia";
import { Usuario } from "./usuario";

export class Alumno {
    id: number;
  legajo: number;
  nombre: string;
  email: string;
  apellido: string;
  calificaciones: Calificacion[] | null;
  asistencias: Asistencia[] | null;
  nombreCompleto: string;
  usuario: Usuario;


  constructor(nombre: string, apellido: string, email: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}



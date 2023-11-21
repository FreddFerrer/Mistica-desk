import { Asistencia } from "./asistencia";
import { Calificacion } from "./calificacion";
import { Examen } from "./examen";
import { Pago } from "./pago";
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
  pagos: Pago;
  dni: string;


  constructor(nombre: string, apellido: string, email: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}



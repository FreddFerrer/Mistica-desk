import { RolEnum } from "./rol-enum";

export class Usuario {
    id: number;
  username: string;
  password: string;
  email: string;
  rol: string; 
  nombre: string;
  apellido: string;
  nombreCompleto: string;

  constructor(
    username: string,
    email: string, 
    nombre: string,
    apellido: string
  ) {
    this.username = username;
    this.email = email;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = `${nombre} ${apellido}`
  }
}

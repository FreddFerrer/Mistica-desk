import { Alumno } from "./alumno";

export class Pago {
    fechaPago: Date;
    monto: number;
    alumno: Alumno;

    constructor(monto: number, fechaPago: Date) {
        
        this.monto = monto;
        this.fechaPago = fechaPago;
      }
}

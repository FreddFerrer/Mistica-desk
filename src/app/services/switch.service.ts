import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  

  constructor() { }

  $nuevoAlumno = new EventEmitter<any>();

  $nuevoPago = new EventEmitter<any>();

  $asignarDocente = new EventEmitter<any>();

  $alumnoSeleccionado = new EventEmitter<any>();

  $docenteSeleccionado = new EventEmitter<any>();

  $nuevaMateria = new EventEmitter<any>();
}

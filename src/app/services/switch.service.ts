import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  $listaAlumnosModal = new EventEmitter<any>();

  $asignarAlumno = new EventEmitter<any>();


  private materiaSeleccionadaSubject = new BehaviorSubject<number | null>(null);
  $materiaSeleccionada = this.materiaSeleccionadaSubject.asObservable();

  setMateriaSeleccionada(idMateria: number) {
    this.materiaSeleccionadaSubject.next(idMateria);
  }
}

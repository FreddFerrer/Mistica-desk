import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Materia } from '../models/materia';

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

  $nuevoExamen = new EventEmitter<any>();


  private materiaSeleccionadaSubject = new BehaviorSubject<Materia | null>(null);
  $materiaSeleccionada = this.materiaSeleccionadaSubject.asObservable();

  setMateriaSeleccionada(materia: Materia) {
    this.materiaSeleccionadaSubject.next(materia);
  }

  private materiaSeleccionadaParaExamenSubject = new BehaviorSubject<Materia | null>(null);
  $materiaSeleccionadaParaExamen = this.materiaSeleccionadaParaExamenSubject.asObservable();

  setMateriaSeleccionadaParaExamen(materia: Materia) {
    this.materiaSeleccionadaParaExamenSubject.next(materia);
  }

}

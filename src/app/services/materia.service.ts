import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from '../models/materia';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private materiasUrl = 'https://mistica-production.up.railway.app/api/materias';
  private materiasPorDocenteUrl = 'https://mistica-production.up.railway.app/api/materias/materiasPorDocente';
  private materiasPorAlumnoUrl = 'https://mistica-production.up.railway.app/api/materias/materiasPorAlumno';

  constructor(private http: HttpClient) {}

  //traer las materias
  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.materiasUrl);
  }

  getMateriasPorDocente(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.materiasPorDocenteUrl);
  }

  getMateriasPorAlumno(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.materiasPorAlumnoUrl);
  }

  // Traer una materia por ID
  getMateriaPorId(id: number): Observable<Materia> {
    const url = `${this.materiasUrl}/${id}`;
    return this.http.get<Materia>(url);
  }

  //agregar una nueva materia
  crearMateria(materia: Materia): Observable<Materia> {
    return this.http.post<Materia>((this.materiasUrl + '/nueva'), materia)
  }

  // Actualizar una materia por ID
  actualizarMateria(id: number, materia: Materia): Observable<Materia> {
    const url = `${this.materiasUrl}/${id}`;
    return this.http.put<Materia>(url, materia);
  }

  // Eliminar materia por ID
  eliminarMateriaPorId(id: number): Observable<void> {
    const url = `${this.materiasUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  //Asignar alumno a materia
  asignarAlumnoAMateria(materiaId: number, alumnoId: number): any {
    const url = `${this.materiasUrl}/${materiaId}/agregar-alumno/${alumnoId}`;
    return this.http.post<any>(url, null);
  }

  //Crear examen
  crearExamen(materiaId: number, examen: Examen): any {
    const url = `${this.materiasUrl}/nuevoExamen/${materiaId}`;
    return this.http.post<Examen>(url, examen);
  }

}


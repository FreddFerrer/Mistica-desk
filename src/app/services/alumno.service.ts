import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnossUrl = 'http://localhost:8080/api/alumnos';

  constructor(private http: HttpClient,
     private tokenService: TokenService) {}

  //traer todos los alumnos
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.alumnossUrl);
  }

  // Traer un alumno por ID
  getAlumnoPorId(id: number): Observable<Alumno> {
    const url = `${this.alumnossUrl}/${id}`;
    return this.http.get<Alumno>(url);
  }

  //agregar un nuevo alumno
  crearAlumno(alumno:Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.alumnossUrl + "/nuevo", alumno)
  }

  // Eliminar un alumno por ID
  eliminarAlumnoPorId(id: number): Observable<void> {
    const url = `${this.alumnossUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

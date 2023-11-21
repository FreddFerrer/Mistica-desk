import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { TokenService } from './token.service';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnossUrl = 'https://mistica-production.up.railway.app/api/alumnos';
  private alumnosPorMateriaUrl = 'https://mistica-production.up.railway.app/api/alumnos/por-materia/';

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

  registrarPago(alumnoId: number, monto: number): Observable<Pago> {
    const url = `${this.alumnossUrl}/realizar-pago/${alumnoId}`;
    const requestBody = { monto };
    return this.http.post<Pago>(url, requestBody);
  }

  getAlumnosPorMateria(materiaId: number): Observable<Alumno[]> {
    const url = `${this.alumnosPorMateriaUrl}${materiaId}`;
    return this.http.get<Alumno[]>(url);
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from '../models/materia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private materiasUrl = 'http://localhost:8080/api/materias';

  constructor(private http: HttpClient) {}

  //traer las materias
  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.materiasUrl);
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

}


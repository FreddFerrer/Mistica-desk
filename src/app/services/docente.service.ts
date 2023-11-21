import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private docentesUrl = 'https://mistica-production.up.railway.app/api/docentes';

  constructor(private http: HttpClient) {}

  //traer los docentes
  getDocentes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.docentesUrl);
  }

  // Traer un docente por ID
  getDocentePorId(id: number): Observable<Usuario> {
    const url = `${this.docentesUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  //agregar una nuevo docente
  crearDocente(docente:Usuario): Observable<Usuario> {
    return this.http.post<Usuario>((this.docentesUrl + '/nuevo'), docente)
  }

  // Actualizar un docente por ID
  actualizarDocente(id: number, docente: Usuario): Observable<Usuario> {
    const url = `${this.docentesUrl}/${id}`;
    return this.http.put<Usuario>(url, docente);
  }

  // Eliminar materia por ID
  eliminarDocentePorId(id: number): Observable<void> {
    const url = `${this.docentesUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  //Asignar docente a materia
  asignarDocenteAMateria(materiaId: number, docenteId: number): Observable<Materia>{
    const url = `${this.docentesUrl}/${materiaId}/agregar-docente/${docenteId}`;
    return this.http.post<Materia>(url, null);
  }
   
}

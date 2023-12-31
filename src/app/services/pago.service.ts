import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Pago } from '../models/pago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private todosLosPagosUrl = 'https://mistica-production.up.railway.app/api/alumnos/pagos';
  private pagosPorAlumno = 'https://mistica-production.up.railway.app/api/alumnos/pagosPorAlumno';

  constructor(private http: HttpClient,
     private tokenService: TokenService) {}

  //traer todos los pagos
  getPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.todosLosPagosUrl);
  }

  getPagosPorAlumno(): Observable<Pago[]> {
    console.log('andaaaa' )
    return this.http.get<Pago[]>(this.pagosPorAlumno);
  }

  
}

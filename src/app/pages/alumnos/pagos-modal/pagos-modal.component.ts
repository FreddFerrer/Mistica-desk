import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';
import { Pago } from 'src/app/models/pago';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-pagos-modal',
  templateUrl: './pagos-modal.component.html',
  styleUrls: ['./pagos-modal.component.css']
})
export class PagosModalComponent implements OnInit {
  @Input() alumno: Alumno;

  monto: number;
  fechaPago: Date;
  nombre: string;
  apellido: string;
  email: string;


  constructor(private modalService: SwitchService) {
    
  }

  ngOnInit() {
    
      this.actualizarDatosAlumno(this.alumno);
    
    
    console.log('el nombre essssssssss ', this.alumno.nombre)
  }

  actualizarDatosAlumno(alumno: Alumno) {
      this.nombre = alumno.nombre;
      this.apellido = alumno.apellido;
  }


  onCreate(): void {
    
  }


  closeModal(){
    this.modalService.$nuevoPago.emit(false);
  }

  crearPago(nuevoPago: Pago){

  }

}

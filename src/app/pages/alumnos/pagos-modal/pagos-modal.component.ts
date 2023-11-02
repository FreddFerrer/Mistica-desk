import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';
import { Pago } from 'src/app/models/pago';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private modalService: SwitchService, private alumnoService: AlumnoService,
    private toastr: ToastrService) {
    
  }

  ngOnInit() {
    
    this.actualizarDatosAlumno(this.alumno);
    console.log('el nombre essssssssss ', this.alumno.nombre)
  }

  actualizarDatosAlumno(alumno: Alumno) {
      this.nombre = alumno.nombre;
      this.apellido = alumno.apellido;
  }


  closeModal(){
    this.modalService.$nuevoPago.emit(false);
  }

  crearPago(monto: number): void {
    if (monto <= 0) {
      this.toastr.error('ERROR: el campo no debe estar vacio o debe ser mayor a 0 ')
      return;
    }
  
    this.alumnoService.registrarPago(this.alumno.id, this.monto).subscribe(
      (pago) => {
        this.toastr.success('Pago registrado', 'Éxito');
        this.closeModal();
      },
      (error) => {
        this.toastr.error('Error al registrar el pago');
        console.error('Error al registrar el pago:', error);
      }
    );
  }
}
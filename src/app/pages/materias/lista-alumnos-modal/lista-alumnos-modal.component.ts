import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';
import { AlumnoService } from '../../../services/alumno.service';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-lista-alumnos-modal',
  templateUrl: './lista-alumnos-modal.component.html',
  styleUrls: ['./lista-alumnos-modal.component.css']
})
export class ListaAlumnosModalComponent {
  modalListaAlumnos: boolean;
  alumnos: Alumno[];
  alumnosFiltrados: Alumno[];

  constructor(private modalService: SwitchService, private tokenService: TokenService,
    private alumnoService: AlumnoService,
    private toastr: ToastrService) {
    
  }

  

  closeListaAlumnoModal() {
    console.log("boton cerrar modal alumno")
    this.modalService.$listaAlumnosModal.emit(false);
  }

  cargarAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      data => {
        this.alumnos = data.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`
        }));
        this.alumnosFiltrados = this.alumnos;
      },
      err => {
        console.log(err);
      }
    );
  }

}

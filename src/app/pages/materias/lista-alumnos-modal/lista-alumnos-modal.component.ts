import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';
import { AlumnoService } from '../../../services/alumno.service';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-lista-alumnos-modal',
  templateUrl: './lista-alumnos-modal.component.html',
  styleUrls: ['./lista-alumnos-modal.component.css']
})
export class ListaAlumnosModalComponent implements OnInit{

  modalListaAlumnos: boolean;
  idMateria: number;
  alumnosDeLaMateria: Alumno[];
  materiaSeleccionada: Materia;


  constructor(private modalService: SwitchService, private tokenService: TokenService,
    private alumnoService: AlumnoService,
    private toastr: ToastrService
    ) {
    
  }

  ngOnInit(): void {
    this.modalService.$materiaSeleccionada.subscribe((materiaSeleccionada) => {
      this.materiaSeleccionada = materiaSeleccionada;
      this.idMateria = materiaSeleccionada.id;
      this.cargarAlumnos(this.idMateria);
      console.log("el id de la materia en el modal es: " , this.idMateria)
      console.log("los alumnos son: ", this.alumnosDeLaMateria)
    });
    
  }


  closeListaAlumnoModal() {
    this.modalService.$listaAlumnosModal.emit(false);
  }

  cargarAlumnos(idMateria: number): void {
    this.alumnoService.getAlumnosPorMateria(idMateria).subscribe(
      (alumnos) => {
        this.alumnosDeLaMateria = alumnos;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

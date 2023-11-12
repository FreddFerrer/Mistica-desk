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
  resultadoExamenUno: boolean=false;
  resultadoExamenDos: boolean=false;
  resultadoExamenFinal: boolean=false;
  examenUno: number = 0


  constructor(private modalService: SwitchService, private tokenService: TokenService,
    private alumnoService: AlumnoService,
    private toastr: ToastrService
    ) {
    
  }

  ngOnInit(): void {
    this.modalService.$materiaSeleccionada.subscribe((materiaSeleccionada) => {
      if (materiaSeleccionada) {
        console.log("el id de la materia en el modal es: ", materiaSeleccionada);
        this.cargarAlumnos(materiaSeleccionada);
        
      }
    });
    
    console.log("los alumnos son: " , this.alumnosDeLaMateria)
  }

  closeListaAlumnoModal() {
    this.modalService.$listaAlumnosModal.emit(false);
  }

  cargarAlumnos(idMateria: number): void {
    this.alumnoService.getAlumnosPorMateria(idMateria).subscribe(
      (alumnos) => {

        this.alumnosDeLaMateria = alumnos.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`
        }));
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  guardarExamenUno() { 
    if (this.validarRango(this.examenUno)) {
      this.resultadoExamenUno = true;
      alert('Calificación guardada correctamente');
    } else {
      console.log('La calificación debe estar entre 0 y 100');
    }
    
  }

  guardarExamenDos() {
    this.resultadoExamenDos = true
  }

  guardarExamenFinal() {
    this.resultadoExamenFinal = true
  }

  validarRango(valor: number): boolean {
    return valor >= 0 && valor <= 100;
  }
}

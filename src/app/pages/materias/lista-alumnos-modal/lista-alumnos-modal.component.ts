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
      if (materiaSeleccionada) {
        console.log("el id de la materia en el modal es: ", materiaSeleccionada);
        this.cargarAlumnos(materiaSeleccionada.id);
        
      }
    });
  }

  private generarNumeroDNI(): string {
    const minDNI = 20000000;
    const maxDNI = 50000000;
    const numeroDNI = Math.floor(Math.random() * (maxDNI - minDNI + 1) + minDNI).toString().padStart(8, '0');
    return numeroDNI;
  }

  closeListaAlumnoModal() {
    this.modalService.$listaAlumnosModal.emit(false);
  }

  cargarAlumnos(idMateria: number): void {
    this.alumnoService.getAlumnosPorMateria(idMateria).subscribe(
      (alumnos) => {

        this.alumnosDeLaMateria = alumnos.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`,
          dni: this.generarNumeroDNI()
        }));
        console.log("los alumnos son: " , this.alumnosDeLaMateria)
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

}

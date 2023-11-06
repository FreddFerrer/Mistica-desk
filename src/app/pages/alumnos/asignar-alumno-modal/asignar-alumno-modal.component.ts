import { Component, Input } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { Usuario } from 'src/app/models/usuario';
import { MateriaService } from 'src/app/services/materia.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-asignar-alumno-modal',
  templateUrl: './asignar-alumno-modal.component.html',
  styleUrls: ['./asignar-alumno-modal.component.css']
})
export class AsignarAlumnoModalComponent {

  @Input() docente: Usuario;

  materias: Materia[];
  materiaSeleccionada: Materia;

  constructor(private modalService: SwitchService,
    private materiaService: MateriaService) {
    
  }

  asignarDocenteAMateria(): void {

  }

  closeAsignarAlumnoModal(){
    this.modalService.$asignarDocente.emit(false);
  }

  cargarMaterias() {
    this.materiaService.getMaterias().subscribe(
      data => {
        this.materias = data.map(materia => ({
          ...materia,
          
        }));
      },
      err => {
        console.log(err);
      }
    );
  }
}

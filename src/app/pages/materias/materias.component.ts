import { Component } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MateriaService } from 'src/app/services/materia.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {

  rol: string;
  materias: Materia[];
  isLogged = false;
  modalAgregarMateria: boolean;
  modalListaAlumnos: boolean;
  materiaSeleccionada: Materia;


  constructor(private tokenService: TokenService, private materiaService: MateriaService, 
    private modalService: SwitchService){

  }

  openListaAlumnoModal(idMateria: number) {

    this.materiaSeleccionada = this.materias.find(materia => materia.id === idMateria);

  if (this.materiaSeleccionada) {
    this.modalService.$materiaSeleccionada.emit(this.materiaSeleccionada);

    console.log("la materia seleccionada es: ", this.materiaSeleccionada);

    this.modalListaAlumnos = true;
  } else {
    console.error("No se encontró la materia con ID", idMateria);
  }
  } 


  closeListaAlumnoModal() {
    this.modalListaAlumnos = false;
  }

  openNuevoAlumnoModal() {
    this.modalAgregarMateria = true;
  }

  closeNuevoAlumnoModal() {
    this.modalAgregarMateria = false;
  }

  ngOnInit() {
    this.modalService.$nuevaMateria.subscribe( (valor) => {
      this.modalAgregarMateria = valor;
    } )
    this.modalService.$listaAlumnosModal.subscribe((valor) => {
      this.modalListaAlumnos = valor;
    })

    if (this.tokenService.getAuthority() === 'ROLE_DOCENTE') {
      console.log('rol:', this.rol)
      this.getMateriasPorDocente();
    } else {
      this.cargarMaterias();
    }
  }


  getMateriasPorDocente(): void {
    this.materiaService.getMateriasPorDocente().subscribe(
      (materias) => {
        this.materias = materias;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  cargarMaterias(): void {
    this.materiaService.getMaterias().subscribe(
      (materias) => {
        this.materias = materias;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

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
  modalImprimirMaterias: boolean


  constructor(private tokenService: TokenService, private materiaService: MateriaService, 
    private modalService: SwitchService){

  }

  openListaAlumnoModal(idMateria: number) {

    this.materiaSeleccionada = this.materias.find(materia => materia.id === idMateria);

    if (this.materiaSeleccionada) {
      this.modalService.setMateriaSeleccionada(this.materiaSeleccionada.id);

      console.log("la materia seleccionada es: ", this.materiaSeleccionada.id);

      this.modalListaAlumnos = true;
    } else {
      console.error("No se encontró la materia con ID", idMateria);
    }
  } 

  openImprimirMaterias() {
    this.modalImprimirMaterias = true;
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

    this.rol = this.tokenService.getAuthority();

    if (this.rol === 'ROLE_DOCENTE') {
      console.log('rol:', this.rol)
      this.getMateriasPorDocente();
    } else if (this.rol === 'ROLE_ESTUDIANTE'){
      this.getMateriasPorAlumno();
    } else {
      this.cargarMaterias();
    }
  }

  getMateriasPorAlumno(): void {
    this.materiaService.getMateriasPorAlumno().subscribe(
      (materias) => {
        this.materias = materias;
      },
      (err) => {
        console.log(err);
      }
    );
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

  esDocenteOrAutoridad(): boolean {
    this.rol = this.tokenService.getAuthority();
    return this.rol === 'ROLE_DOCENTE' || this.rol === 'ROLE_AUTORIDAD';
  }
}

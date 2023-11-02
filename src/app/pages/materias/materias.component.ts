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


  constructor(private tokenService: TokenService, private materiaService: MateriaService, 
    private modalService: SwitchService){

  }

  openListaAlumnoModal() {
    console.log("boto open lista modal")
    this.modalListaAlumnos = true;
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
    this.cargarMaterias();
    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;
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

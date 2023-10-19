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
  modalSwitch: boolean;


  constructor(private tokenService: TokenService, private materiaService: MateriaService, 
    private modalService: SwitchService){

  }

  openModal() {
    console.log('boton andaaaaa')
    this.modalSwitch = true;
  }

  closeModal() {
    this.modalSwitch = false;
  }

  ngOnInit() {
    this.modalService.$nuevoAlumno.subscribe( (valor) => {
      this.modalSwitch = valor;
    } )
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

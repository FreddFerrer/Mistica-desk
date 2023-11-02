import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { Usuario } from 'src/app/models/usuario';
import { SwitchService } from '../../../services/switch.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-asignar-materia-modal',
  templateUrl: './asignar-materia-modal.component.html',
  styleUrls: ['./asignar-materia-modal.component.css']
})
export class AsignarMateriaModalComponent implements OnInit{
  @Input() docente: Usuario;

  nombre: string;
  apellido: string;
  materias: Materia[];
  materia: Materia;
  rol: string;
  isLogged: boolean;

  constructor(private modalService: SwitchService,
    private materiaService: MateriaService,
    private tokenService: TokenService) {
    
  }


  ngOnInit(): void {

    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;

    this.actualizarDatosDocente(this.docente);
    this.cargarMaterias();

  }

  actualizarDatosDocente(docente: Usuario) {
    this.nombre = docente.nombre;
    this.apellido = docente.apellido;
}

  asignar(materia: Materia){

  }

  closeAsignarMateriaModal(){
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
  


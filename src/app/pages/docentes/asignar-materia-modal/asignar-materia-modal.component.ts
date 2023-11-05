import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { Usuario } from 'src/app/models/usuario';
import { SwitchService } from '../../../services/switch.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TokenService } from 'src/app/services/token.service';
import { DocenteService } from 'src/app/services/docente.service';
import { ToastrService } from 'ngx-toastr';

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
  materiaSeleccionada: number;
  rol: string;
  isLogged: boolean;

  constructor(private modalService: SwitchService,
    private materiaService: MateriaService,
    private tokenService: TokenService,
    private docenteService: DocenteService,
    private toastr: ToastrService) {
    
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

asignarDocenteAMateria() {
  const docenteId = this.docente.id;
  const materiaId = this.materiaSeleccionada;

  this.docenteService.asignarDocenteAMateria(materiaId, docenteId).subscribe(
    (response) => {
      this.toastr.success(`Docente asignado con éxito a ${response.nombreMateria}`, 'Éxito');
      this.closeAsignarMateriaModal();
    },
    (error) => {
      this.toastr.error('ERROR: los campos no deben estar vacios' + error.name)  
    }
  );
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
  


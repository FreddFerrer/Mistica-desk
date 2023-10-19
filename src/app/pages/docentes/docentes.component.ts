import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent {

  rol: string;
  docentes: Usuario[];
  isLogged = false;
  modalSwitch: boolean;


  constructor(private tokenService: TokenService, private docenteService: DocenteService, 
    private modalService: SwitchService) {
    
  }

  ngOnInit() {
    this.modalService.$nuevoAlumno.subscribe( (valor) => {
      this.modalSwitch = valor;
    } )
    this.cargarDocentes();
    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;
  }

  openModal() {
    console.log('boton andaaaaa2')
    this.modalSwitch = true;
  }

  closeModal() {
    this.modalSwitch = false;
  }

  cargarDocentes(): void {
    this.docenteService.getDocentes().subscribe(
      data => {
        this.docentes = data.map(docente => ({
          ...docente,
          nombreCompleto: `${docente.nombre} ${docente.apellido}`
        }));
      },
      err => {
        console.log(err);
      }
    );
  }

}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';
import { DocenteService } from 'src/app/services/docente.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nuevo-docente-modal',
  templateUrl: './nuevo-docente-modal.component.html',
  styleUrls: ['./nuevo-docente-modal.component.css']
})
export class NuevoDocenteModalComponent {

  rol: string;
  isLogged = false;
  nombre: string;
  apellido: string;
  email: string;
  username: string;

  constructor(private modalService: SwitchService,
    private tokenService: TokenService, private docenteService: DocenteService,
    private router: Router,
    private toastr: ToastrService) {
    
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.rol = this.tokenService.getAuthority()
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  onCreate(): void {
    const nuevoDocente = new Usuario(this.nombre, this.apellido, this.username, this.email);
    this.docenteService.crearDocente(nuevoDocente)
    console.log(nuevoDocente)
  }

  insertar(nuevoDocente: Usuario){
    this.docenteService.crearDocente(nuevoDocente).subscribe(
      (docenteCreado) => {
        console.log('Docente creado:', docenteCreado);
        // Puedes hacer aquí cualquier acción adicional después de crear el comentario, si es necesario.
        this.closeModal();
        // Mostrar el mensaje de éxito durante 5 segundos (5000 ms)
        this.toastr.success('Docente creado con éxito', 'Éxito');
      
      // Retrasar la recarga de la página en 5 segundos
        setTimeout(() => {
          window.location.reload();
      }, 2000);
      },
      (error) => {
        console.error('Error al crear el docente:', error);
        this.toastr.error('ERROR: revise los campos' + error.name)
        
      })
  }

  closeModal(){
    this.modalService.$modal.emit(false);
  }

}

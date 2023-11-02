import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-alumnos-modal',
  templateUrl: './alumnos-modal.component.html',
  styleUrls: ['./alumnos-modal.component.css']
})
export class AlumnosModalComponent implements OnInit {

  rol: string;
  isLogged = false;
  nombre: string;
  apellido: string;
  email: string;

  constructor(private modalService: SwitchService,
    private tokenService: TokenService, private alumnoService: AlumnoService,
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
    const nuevoAlumno = new Alumno(this.nombre, this.apellido, this.email);
    this.alumnoService.crearAlumno(nuevoAlumno)
    console.log(nuevoAlumno)
  }

  insertar(nuevoAlumno: Alumno){
    this.alumnoService.crearAlumno(nuevoAlumno).subscribe(
      (alumnoCreado) => {
        console.log('Alumno creado:', alumnoCreado);
        this.toastr.success('Alumno creado con éxito', 'Éxito'); 
        this.closeModal();        
      },
      (error) => {
        this.toastr.error('ERROR: revise los campos' + error.name)
        console.error('Error al crear el alumno:', error);
        
      })
  }

  closeModal(){
    this.modalService.$nuevoAlumno.emit(false);
  }
}

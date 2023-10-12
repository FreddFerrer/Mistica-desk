import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TokenService } from 'src/app/services/token.service';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit{
  rol: string;
  alumnos: Alumno[];
  isLogged = false;
  modalSwitch: boolean;
  
  constructor(private tokenService: TokenService, private alumnoService: AlumnoService, 
    private modalService: SwitchService) {
    
  }


  openModal() {
    console.log('boton andaaaaa')
    this.modalSwitch = true;
  }

  closeModal() {
    this.modalSwitch = false;
  }

  ngOnInit() {
    this.modalService.$modal.subscribe( (valor) => {
      this.modalSwitch = valor;
    } )
    this.cargarAlumnos();
    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;
  }


  cargarAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      data => {
        this.alumnos = data.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`
        }));
      },
      err => {
        console.log(err);
      }
    );
  }

}

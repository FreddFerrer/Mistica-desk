import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-alumnos-materias',
  templateUrl: './alumnos-materias.component.html',
  styleUrls: ['./alumnos-materias.component.css']
})
export class AlumnosMateriasComponent implements OnInit{

  rol: string;
  alumnos: Alumno[];
  alumnosFiltrados: Alumno[];
  alumnoSeleccionado: Alumno;
  isLogged = false;
  modalSwitch1: boolean;
  modalSwitch2: boolean;
  modalSwitch3: boolean;
  
  constructor(private tokenService: TokenService, private alumnoService: AlumnoService, 
    private modalService: SwitchService) {
    
  }

  ngOnInit() {
    this.modalService.$nuevoAlumno.subscribe( (valor) => {
      this.modalSwitch1 = valor;
    } )
    this.modalService.$nuevoPago.subscribe( (valor) => {
      this.modalSwitch2 = valor;
    } )
    this.cargarAlumnos();
    
    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;
  }

  private generarNumeroDNI(): string {
    const minDNI = 20000000;
    const maxDNI = 50000000;
    const numeroDNI = Math.floor(Math.random() * (maxDNI - minDNI + 1) + minDNI).toString().padStart(8, '0');
    return numeroDNI;
  }

  openNuevoAlumnoModal() {
    this.modalSwitch1 = true;
  }

  closeNuevoAlumnoModal() {
    this.modalSwitch1 = false;
  }

  openNuevoPagoModal(alumnoId: number) {  
    this.alumnoSeleccionado = this.alumnos.find(alumno => alumno.id === alumnoId);

    if (this.alumnoSeleccionado) {
      this.modalService.$alumnoSeleccionado.emit(this.alumnoSeleccionado); 
      
      console.log('el nombre es ', this.alumnoSeleccionado)
    }

    this.modalSwitch2 = true;
  }

  closeNuevoPagoModal() {
    this.modalSwitch2 = false;
  }

  cargarAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      data => {
        this.alumnos = data.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`,
          dni: this.generarNumeroDNI()
        }));
        this.alumnosFiltrados = this.alumnos;
      },
      err => {
        console.log(err);
      }
    );
  }

  openAsignarAlumno(alumnoId: number): void {
    this.alumnoSeleccionado = this.alumnos.find(alumno => alumno.id === alumnoId);

    if (this.alumnoSeleccionado) {
      this.modalService.$alumnoSeleccionado.emit(this.alumnoSeleccionado); 
      
      console.log('el nombre es ', this.alumnoSeleccionado)
    }

    this.modalSwitch3 = true;
  }

  buscarAlumno(event: KeyboardEvent) {
    const valor = (event.target as HTMLInputElement).value;
    
    // Filtra los alumnos según la búsqueda o muestra todos los alumnos si la búsqueda está vacía.
    this.alumnosFiltrados = valor === ''
      ? this.alumnos
      : this.alumnos.filter(alumno => alumno.nombre.toLowerCase().includes(valor.toLowerCase()));
  }
  


  
  
}

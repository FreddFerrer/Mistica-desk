import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Materia } from 'src/app/models/materia';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MateriaService } from 'src/app/services/materia.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-asignar-alumno-modal',
  templateUrl: './asignar-alumno-modal.component.html',
  styleUrls: ['./asignar-alumno-modal.component.css']
})
export class AsignarAlumnoModalComponent implements OnInit{

  @Input() materia: Materia;

  alumnos: Alumno[];
  alumnoSeleccionado: number;
  materiaSeleccionada: Materia;
  rol: string;


  constructor(private modalService: SwitchService,
    private materiaService: MateriaService,
    private tokenService: TokenService,
    private alumnosService: AlumnoService,
    private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    this.rol = this.tokenService.getAuthority();

    this.cargarAlumnos();
    
    console.log("la materia es" , this.materia)
    

  }

  asignarAlumnoAMateria(): void {
    const materiaId = this.materia.id; 
    const alumnoId = +this.alumnoSeleccionado; 

    console.log("materia id:" , typeof(materiaId))
    console.log("alumno id:" , typeof(alumnoId))

    this.materiaService.asignarAlumnoAMateria(materiaId, alumnoId).subscribe(
      (response) => {
        this.toastr.success('Alumno asignado con éxito a', 'Éxito');
        this.closeAsignarAlumnoModal();
      },
      (error) => {
        this.toastr.error('ERROR: los campos no deben estar vacios' + error.name)  
      }
    );
  }

  closeAsignarAlumnoModal(){
    this.modalService.$asignarAlumno.emit(false);
  }

  cargarAlumnos() {
    this.alumnosService.getAlumnos().subscribe(
      data => {
        this.alumnos = data.map(alumno => ({
          ...alumno,
          nombreCompleto: `${alumno.nombre} ${alumno.apellido}`
        }));
        console.log("las alumnos son " , this.alumnos)
      },
      err => {
        console.log(err);
      }
    );
  }
}

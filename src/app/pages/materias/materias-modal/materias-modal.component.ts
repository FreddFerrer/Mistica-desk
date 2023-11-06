import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from '../../../services/token.service';


import { Usuario } from 'src/app/models/usuario';
import { MateriaService } from 'src/app/services/materia.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';




@Component({
  selector: 'app-materias-modal',
  templateUrl: './materias-modal.component.html',
  styleUrls: ['./materias-modal.component.css'],
})
export class MateriasModalComponent implements OnInit {
  
  
  nombreMateria: String;
  open: boolean = false;
  docentes: Usuario[];
  isLogged: boolean;
  rol: string;
  anoEscolar: String;
  turno: string;
  horarioEntrada: string;
  horarioSalida: string;
  horaEntrada: string;
  minutoEntrada: string;
  horaSalida: string;
  minutoSalida: string;

  constructor(private modalService: SwitchService, private tokenService: TokenService,
    private materiaService: MateriaService,
    private toastr: ToastrService,
    private router: Router) {
    
  }

  ngOnInit(): void {
    this.turno = 'Mañana';
  }

  onTurnoChange() {
    // Esta función se ejecutará cuando cambie el valor del select de turno
    console.log('El usuario seleccionó el turno:', this.turno);
  }

  

  onOutsideClick() {
    this.open = false;
  }

  unificarHorarioEntrada() {
    this.horarioEntrada = this.horaEntrada + ':' + this.minutoEntrada;
  }

  unificarHorarioSalida() {
    this.horarioSalida = this.horaSalida + ':' + this.minutoSalida;
  }



  insertar(nuevaMateria: Materia)  {

    this.unificarHorarioEntrada();

    nuevaMateria.horarioEntrada = this.horarioEntrada;

    this.unificarHorarioSalida();

    nuevaMateria.horarioSalida = this.horarioSalida

    this.materiaService.crearMateria(nuevaMateria).subscribe(
      (response) => {
        console.log('Materia creada con éxito:', response);
        this.closeNuevoAlumnoModal();
        this.toastr.success('Materia creada con éxito', 'Éxito');
        this.router.navigate(['materias']);
        
      },
      (error) => {
        
        console.error('Error al crear la materia:', error);
        this.toastr.error('Campos vacios u horarios incorrectos', 'Error');
      }
    );
  }

  closeNuevoAlumnoModal() {
    console.log('boton cerrar funciona')
    this.modalService.$nuevaMateria.emit(false);
  }

  
}

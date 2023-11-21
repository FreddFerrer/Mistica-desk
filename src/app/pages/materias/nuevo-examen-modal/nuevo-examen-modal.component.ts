import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Examen } from 'src/app/models/examen';
import { Materia } from 'src/app/models/materia';
import { MateriaService } from 'src/app/services/materia.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-nuevo-examen-modal',
  templateUrl: './nuevo-examen-modal.component.html',
  styleUrls: ['./nuevo-examen-modal.component.css']
})
export class NuevoExamenModalComponent implements OnInit{

  @Input() materia: Materia;

  nombre: string;
  fecha: Date;

  constructor(private modalService: SwitchService,
    private materiaService: MateriaService,
    private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
      
  }

  crearExamen(nuevoExamen: Examen): void {
    
    this.materiaService.crearExamen(this.materia.id, nuevoExamen).subscribe(
      (response) => {
        console.log('Examen creado exitosamente:', response);
        this.toastr.success('Examen creado con éxito', 'Éxito');
        this.modalService.$nuevoExamen.emit(false);
      },
      (error) => {
        console.error('Error al crear el examen:', error);
        this.toastr.error('Campos vacios u incorrectos', 'Error');
      }
    );
    
  }

  closeModal(){
    this.modalService.$nuevoExamen.emit(false);
  }

  

}

import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-alumnos-modal',
  templateUrl: './alumnos-modal.component.html',
  styleUrls: ['./alumnos-modal.component.css']
})
export class AlumnosModalComponent {

  constructor(private modalService: SwitchService) {
  }

  closeModal(){
    this.modalService.$modal.emit(false);
  }
}

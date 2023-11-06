import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-imprimir-materias-modal',
  templateUrl: './imprimir-materias-modal.component.html',
  styleUrls: ['./imprimir-materias-modal.component.css']
})

export class ImprimirMateriasModalComponent implements OnInit {
  rol: string;

  constructor(private tokenkenServices: TokenService, private modalService: SwitchService) {

  }

  ngOnInit() {
    this.rol = this.tokenkenServices.getAuthority()
  }

  createPdf(){
    console.log("crear pdf")
  }

  pagos: string
}

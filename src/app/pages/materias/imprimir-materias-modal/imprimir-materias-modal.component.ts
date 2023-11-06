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
  pdfMake: any;

  constructor(private tokenkenServices: TokenService, private modalService: SwitchService) {

  }

  ngOnInit() {
    this.rol = this.tokenkenServices.getAuthority()
  }

  createPdf(){
    console.log("crear pdf")
  }

  async cargarPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }
}

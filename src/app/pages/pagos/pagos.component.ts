import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TokenService } from 'src/app/services/token.service';
import { PagoService } from '../../services/pago.service';
import { RolEnum } from '../../models/rol-enum';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  rol: string;
  pagos: Pago[];
  alumnos: Alumno[];
  isLogged = false;
  pdfMake: any;

  constructor(private tokenService: TokenService, private pagoService: PagoService, private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;

    if (this.tokenService.getAuthority() === 'ROLE_ESTUDIANTE') {
      console.log('rol:', this.rol)
      this.getPagosPorAlumno();
    } else {
      this.getPagos();
    }
  }

  getPagos(): void {
    this.pagoService.getPagos().subscribe(
      (pagos) => {
        this.pagos = pagos;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPagosPorAlumno(): void {
    this.pagoService.getPagosPorAlumno().subscribe(
      (pagos) => {
        this.pagos = pagos;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  async cargarPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }

  async createPdf(infoPago: Pago){
    await this.cargarPdfMaker();
    const pdfDefinition: any = {
      
      
      content: [
        {
          text: 'RECIBO DE PAGO - AFIP',
          fontSize: 24,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
          color: '#001f3f'
        },
        {
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 500,
              h: 20,
              r: 5,
              color: '#001f3f'
              
            }
          ]
        },
        {
          text: 'NOMBRE Y APELLIDO: ' + (infoPago.alumno.nombre + ' ' + infoPago.alumno.apellido),
          fontSize: 16,
          margin: [10, 10, 0, 10],
          color: '#001f3f'
        },
        {
          text: 'LEGAJO: ' + infoPago.alumno.legajo,
          fontSize: 16,
          margin: [10, 5, 0, 10],
          color: '#001f3f'
        },
        {
          text: 'EMAIL: ' + infoPago.alumno.usuario.email,
          fontSize: 16,
          margin: [10, 5, 0, 10],
          color: '#001f3f'
        },
        {
          text: 'MONTO: ' + infoPago.monto,
          fontSize: 16,
          margin: [10, 5, 0, 10],
          color: '#001f3f'
        },
        {
          text: 'FECHA: ' + infoPago.fechaPago,
          fontSize: 16,
          margin: [10, 5, 0, 10],
          color: '#001f3f'
        },
        {
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 500,
              h: 20,
              r: 5,
              color: '#001f3f'
              
            }
          ]
        }
      ],

    }

    this.pdfMake.createPdf(pdfDefinition).open();
  }

  openModal(){

  }

  
}

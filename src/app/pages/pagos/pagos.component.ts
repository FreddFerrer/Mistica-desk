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
  anchoPagina = 595;
  margen = 20;
  anchoColor = (this.anchoPagina - (4 * this.margen)) / 5;

  constructor(private tokenService: TokenService, private pagoService: PagoService, private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.rol = this.tokenService.getAuthority();
    this.isLogged = true;

    this.rol = this.tokenService.getAuthority();

    if ( this.rol === 'ROLE_ESTUDIANTE') {
      console.log('rol:', this.rol)
      this.getPagosPorAlumno();
    } else if (this.rol === 'ROLE_AUTORIDAD') {
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
          canvas: [
            {
              type: 'rect',
              x: this.margen,
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#00BFFF'
            },
            {
              type: 'rect',
              x: this.margen + this.anchoColor,
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#00FF00'
            },
            {
              type: 'rect',
              x: this.margen + (2 * this.anchoColor),
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#FFA500'
            },
            {
              type: 'rect',
              x: this.margen + (3 * this.anchoColor),
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#800080'
            },
            {
              type: 'rect',
              x: this.margen + (4 * this.anchoColor),
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#FF69B4'
            }
          ],
          alignment: 'right',
        },
        {
          text: 'EDUCAR - RECIBO DE PAGO',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 30, 0, 30]
        },
        {
          layout: 'lightHorizontalLines',
          table: {
            widths: [250, 250],
            body: [
              [{text: 'DATOS', bold: true, alignment: 'center'}, {text: 'DESCRIPCION', bold: true, alignment: 'center'}],
              ['NOMBRE Y APELLIDO', infoPago.alumno.nombreCompleto],
              ['LEGAJO', infoPago.alumno.legajo],
              ['EMAIL', infoPago.alumno.email],
              ['MONTO', infoPago.monto],
              ['MES', infoPago.fechaPago.getMonth],
              ['AÑO', infoPago.fechaPago.getFullYear]
            ]
          },
          fontSize: 16,
        },
        {
          text: 'En EDUCAR, valoramos profundamente la confianza que depositan en nosotros ' +
          'para la educación de su hijo/a ' + infoPago.alumno.nombreCompleto + '.\nSu compromiso con ' +
          'su educación es inspirador y fundamental para su crecimiento. Juntos, estamos ' +
          'construyendo un camino hacia el conocimiento y el éxito.\nSeguiremos dedicando ' +
          'nuestros esfuerzos para brindarle la mejor formación posible. Agradecemos su ' +
          'continua confianza en nosotros.\nAtentamente,  Rectorado.',
          fontSize: 16,
          margin: [0, 30, 0, 30],
          alignment: 'justify',
          lineHeight: 1.5
        },
        {
          text: 'N° de Recibo: ' + infoPago.id + '\nFecha de Emision: '  +
          '\nMedio de Pago: Transaccion Virtual',
          fontSize: 16,
          alignment: 'right',
          margin: [0, 0, 0, 5],
          lineHeight: 1.5
        },
        {
          canvas: [
            {
              type: 'rect',
              x: this.margen,
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#00BFFF'
            },
            {
              type: 'rect',
              x: this.margen + this.anchoColor,
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#00FF00'
            },
            {
              type: 'rect',
              x: this.margen + (2 * this.anchoColor),
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#FFA500'
            },
            {
              type: 'rect',
              x: this.margen + (3 * this.anchoColor),
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#800080'
            },
            {
              type: 'rect',
              x: this.margen + (4 * this.anchoColor),
              y: this.margen,
              w: this.anchoColor,
              h: 40,
              color: '#FF69B4'
            }
          ],
          alignment: 'right',
        },
      ]

    }

    this.pdfMake.createPdf(pdfDefinition).open();
  }

  openModal(){

  }

  
}

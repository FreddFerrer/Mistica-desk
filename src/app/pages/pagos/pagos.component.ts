import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TokenService } from 'src/app/services/token.service';
import { PagoService } from '../../services/pago.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


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
  /*
  async createPdf(infoPago: Pago){
    try {
      
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const margen = 20;

    const anchoPagina = 595;
    const anchoColor = (anchoPagina - 4 * margen) / 5;
    var dd = {
      content: [
        {
            image: 'imagen',
            width: 200,
            fit: [100, 100]
        },
        {
          canvas: [
            {
              type: 'rect',
              x: margen,
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#00BFFF'
            },
            {
              type: 'rect',
              x: margen + anchoColor,
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#00FF00'
            },
            {
              type: 'rect',
              x: margen + (2 * anchoColor),
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#FFA500'
            },
            {
              type: 'rect',
              x: margen + (3 * anchoColor),
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#800080'
            },
            {
              type: 'rect',
              x: margen + (4 * anchoColor),
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#FF69B4'
            }
        ]
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
          'continua confianza en nosotros.\nAtentamente, Rectorado',
          fontSize: 16,
          margin: [0, 30, 0, 30],
          alignment: 'justify',
          lineHeight: 1.1
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
              x: margen,
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#00BFFF'
            },
            {
              type: 'rect',
              x: margen + anchoColor,
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#00FF00'
            },
            {
              type: 'rect',
              x: margen + (2 * anchoColor),
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#FFA500'
            },
            {
              type: 'rect',
              x: margen + (3 * anchoColor),
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#800080'
            },
            {
              type: 'rect',
              x: margen + (4 * anchoColor),
              y: margen,
              w: anchoColor,
              h: 10,
              color: '#FF69B4'
            }
          ],
          alignment: 'right',
        },
      ],
      images: {
          imagen: 'https://i.ibb.co/CvLMrp8/imagen-facultad-en-png.png'
      }
    };
    pdfMake.createPdf(dd).open();
    } catch (error) {
      console.log(error)
    }

  }*/

  async createPdf(infoPago: Pago) {
    console.log(infoPago)
    try {
      const date = new Date(infoPago.fechaPago);
      var fechaActual = new Date();
      var anio = fechaActual.getFullYear();
      var mes = fechaActual.getMonth() + 1;
      var dia = fechaActual.getDate();

      var fechaFormateada =  (dia < 10 ? '0' : '') + dia + '/' + (mes < 10 ? '0' : '') + mes + '/'  +  anio;
     
      await this.cargarPdfMaker();
      const margen = 20;
      const anchoPagina = 595;
      const anchoColor = (anchoPagina - 4 * margen) / 5;

      const dd = {
        content: [
          {
            image: 'imagen',
            width: 200,
            fit: [100, 100]
          },
          {
            canvas: [
              {
                type: 'rect',
                x: margen,
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#00BFFF'
              },
              {
                type: 'rect',
                x: margen + anchoColor,
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#00FF00'
              },
              {
                type: 'rect',
                x: margen + (2 * anchoColor),
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#FFA500'
              },
              {
                type: 'rect',
                x: margen + (3 * anchoColor),
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#800080'
              },
              {
                type: 'rect',
                x: margen + (4 * anchoColor),
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#FF69B4'
              }
            ]
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
                [{ text: 'DATOS', bold: true, alignment: 'center' }, { text: 'DESCRIPCION', bold: true, alignment: 'center' }],
                ['NOMBRE Y APELLIDO', (infoPago.alumno.nombre + infoPago.alumno.apellido)],
                ['LEGAJO', infoPago.alumno.legajo],
                ['EMAIL', infoPago.alumno.usuario.email],
                ['MONTO', infoPago.monto],
                ['MES', date.getMonth()],
                ['AÑO', date.getFullYear()]
              ]
            },
            fontSize: 16,
          },
          {
            text: `En EDUCAR, valoramos profundamente la confianza que depositan en nosotros para la educación de su hijo/a ${infoPago.alumno.nombre + infoPago.alumno.apellido}.\nSu compromiso con su educación es inspirador y fundamental para su crecimiento.
            Juntos, estamos construyendo un camino hacia el conocimiento y el éxito.\nSeguiremos dedicando nuestros esfuerzos para brindarle la mejor formación posible.\nAgradecemos su continua confianza en nosotros.\nAtentamente, Rectorado`,
            fontSize: 16,
            margin: [0, 30, 0, 30],
            lineHeight: 1.1
          },
          {
            text: `N° de Recibo: ${infoPago.id}
            Fecha de Emision: ${fechaFormateada}
            Medio de Pago: Transaccion Virtual`,
            fontSize: 16,
            alignment: 'right',
            margin: [0, 0, 0, 5],
            lineHeight: 1.5
          },
          {
            canvas: [
              {
                type: 'rect',
                x: margen,
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#00BFFF'
              },
              {
                type: 'rect',
                x: margen + anchoColor,
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#00FF00'
              },
              {
                type: 'rect',
                x: margen + (2 * anchoColor),
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#FFA500'
              },
              {
                type: 'rect',
                x: margen + (3 * anchoColor),
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#800080'
              },
              {
                type: 'rect',
                x: margen + (4 * anchoColor),
                y: margen,
                w: anchoColor,
                h: 10,
                color: '#FF69B4'
              }
            ],
            alignment: 'right'
          }
        ],
        images: {
          imagen: 'https://i.ibb.co/CvLMrp8/imagen-facultad-en-png.png'
        }
      };
      
      await this.pdfMake.createPdf(dd).open();
    } catch (error) {
      console.log(error);
    }
  };

  openModal(){

  };
};


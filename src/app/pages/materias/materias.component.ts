import { Component, EventEmitter, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MateriaService } from 'src/app/services/materia.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SpeechServiceService } from 'src/app/services/speech-service.service';
import { SwitchService } from 'src/app/services/switch.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit{

  rol: string;
  materias: Materia[];
  isLogged = false;
  modalAgregarMateria: boolean;
  modalListaAlumnos: boolean;
  materiaSeleccionada: Materia;
  modalImprimirMaterias: boolean
  modalAsignarAlumno: boolean;
  modalNuevoExamen: boolean;
  materiaSeleccionadaParaExamen: Materia;
  pdfMake: any;


  constructor(private tokenService: TokenService, private materiaService: MateriaService, 
    private modalService: SwitchService, private speechService: SpeechServiceService,
    private sidebarService: SidebarService
    ){

  }

  ngOnInit() {
    this.modalService.$nuevaMateria.subscribe( (valor) => {
      this.modalAgregarMateria = valor;
    } )
    this.modalService.$listaAlumnosModal.subscribe((valor) => {
      this.modalListaAlumnos = valor;
    })
    this.modalService.$asignarAlumno.subscribe((valor) => {
      this.modalAsignarAlumno = valor;
    })
    this.modalService.$nuevoExamen.subscribe((valor) => {
      this.modalNuevoExamen = valor;
    })

    this.rol = this.tokenService.getAuthority();

    if (this.rol === 'ROLE_DOCENTE') {
      console.log('rol:', this.rol)
      this.getMateriasPorDocente();
    } else if (this.rol === 'ROLE_ESTUDIANTE'){
      this.getMateriasPorAlumno();
    } else {
      this.cargarMaterias();
    }
  }

  listaDeMateriasTalk(): void {
    //this.speechService.speak(`Las materias son:${materia.}`);
  }

  generarLetra(): string {
    const letras = ['A', 'B', 'C'];
    const indiceLetra = Math.floor(Math.random() * letras.length);
    return letras[indiceLetra];
  }

  openNuevoExamenModal(idMateria: number){
    this.materiaSeleccionadaParaExamen = this.materias.find(materia => materia.id === idMateria);

    if (this.materiaSeleccionadaParaExamen) {
      this.modalService.setMateriaSeleccionadaParaExamen(this.materiaSeleccionadaParaExamen);

      console.log("la materia seleccionada es: ", this.materiaSeleccionadaParaExamen.id);

      this.modalNuevoExamen = true;
    } else {
      console.error("No se encontró la materia con ID", idMateria);
    }
  }

  openAsignarAlumnoModal(idMateria: number){
    this.materiaSeleccionada = this.materias.find(materia => materia.id === idMateria);

    if (this.materiaSeleccionada) {
      this.modalService.setMateriaSeleccionada(this.materiaSeleccionada);

      console.log("la materia seleccionada es: ", this.materiaSeleccionada.id);

      this.modalAsignarAlumno = true;
    } else {
      console.error("No se encontró la materia con ID", idMateria);
    }
  }

  closeAsignarAlumnoModal() {
    this.modalAsignarAlumno = false;
  }

  openListaAlumnoModal(idMateria: number) {

    this.materiaSeleccionada = this.materias.find(materia => materia.id === idMateria);

    if (this.materiaSeleccionada) {
      this.modalService.setMateriaSeleccionada(this.materiaSeleccionada);

      console.log("la materia seleccionada es: ", this.materiaSeleccionada.id);

      this.modalListaAlumnos = true;
    } else {
      console.error("No se encontró la materia con ID", idMateria);
    }
  }

  sidebarHidden: boolean = true;
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    console.log("funciona boton")
  }

  openImprimirMaterias() {
    this.modalImprimirMaterias = true;
  }
  closeImprimirMaterias(){
    this.modalImprimirMaterias = false
  }

  closeListaAlumnoModal() {
    this.modalListaAlumnos = false;
  }

  openNuevoAlumnoModal() {
    this.modalAgregarMateria = true;
  }

  closeNuevoAlumnoModal() {
    this.modalAgregarMateria = false;
  }


  getMateriasPorAlumno(): void {
    this.materiaService.getMateriasPorAlumno().subscribe(
      (materias) => {
        this.materias = materias;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private leerListaMaterias(): void {
    const mensaje = this.generarMensajeMaterias();
    this.speechService.speak(mensaje);
  }

  private generarMensajeMaterias(): string {
    const materiasTexto = this.materias.map(materia => `${materia.nombreMateria} con el profesor ${materia.docente.nombre} ${materia.docente.apellido}`).join(', ');
    return `Las materias son: ${materiasTexto}.`;
  }

  getMateriasPorDocente(): void {
    this.materiaService.getMateriasPorDocente().subscribe(
      materias => {
        this.materias = materias.map(materia => ({
          ...materia,
          aula: this.generarLetra(),
        }));
        this.leerListaMaterias();
      }
    );
  }
  


  cargarMaterias(): void {
    this.materiaService.getMaterias().subscribe(
      (materias) => {
        this.materias = materias;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  esDocenteOrAutoridad(): boolean {
    this.rol = this.tokenService.getAuthority();
    return this.rol === 'ROLE_DOCENTE' || this.rol === 'ROLE_AUTORIDAD';
  }

  async cargarPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }



  async createPdf(materia: Materia) {
    
    try {
     
      var margen = 20;
  
      var anchoPagina = 595;
      var anchoColor = (anchoPagina - (4 * margen)) / 5;
  
      const body = [];
  
      body.push([{text: 'LEGAJO', bold: true, alignment: 'center', fillColor: '#4682B4'}, {text: 'ALUMNO', bold: true, alignment: 'center', fillColor: '#4682B4'}]);
  
    for (var i = 0; i < materia.alumnos.length; i++) {
    const alumnoA = materia.alumnos[i];
    body.push([alumnoA.legajo, (alumnoA.nombre + ' '+ alumnoA.apellido)]);
  }
  
  const tablaAlumnos = {
    table: {
      widths: [250, 250],
      body: body
    },
    fontSize: 16,
    margin: [0, 0, 0, 30],
    layout: {
      fillColor: function (rowIndex, node, columnIndex) {
        return (rowIndex % 2 === 0) ? '#B2EBF2' : '#E0F7FA';
        }
      }
    };

    await this.cargarPdfMaker();
      

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
            ],
            alignment: 'right',
          },
          {
            text: materia.nombreMateria.toUpperCase() + ' - LISTADO DE ALUMNOS',
            fontSize: 20,
            bold: true,
            alignment: 'center',
            margin: [0, 30, 0, 30]
          },
          tablaAlumnos,
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
      
      
      await this.pdfMake.createPdf(dd).open();
    } catch (error) {
      console.log(error);
    }
  };
}

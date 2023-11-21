import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SpeechServiceService } from 'src/app/services/speech-service.service';
import { TokenService } from 'src/app/services/token.service';

const navLinks = document.querySelector('.nav-links') as HTMLElement;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isLogged = false;
  rol: string;
  rolTexto: string;
  usuario: string;

  

  constructor(private tokenService: TokenService, private router: Router,
    private speechService: SpeechServiceService,
    private sidebarService: SidebarService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.rol = this.tokenService.getAuthority();
      this.rolTexto = this.convertirRolATexto(this.rol);
      this.usuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
    }

    this.sidebarService.sidebarHidden$.subscribe((hidden) => {
      this.sidebarHidden = hidden;})
  }

  listaDeMateriasTalk(): void {
    this.speechService.speak('Lista de materias');
  }

  listaDeAlumnosTalk(): void {
    this.speechService.speak('Lista de alumnos');
  }

  listaDeDocentesTalk(): void {
    this.speechService.speak('Lista de docentes');
  }

  listaDePagosTalk(): void {
    this.speechService.speak('Lista de pagos');
  }

  salirTalk(): void {
    this.speechService.speak('salir');
  }

  materiasYAlumnosTalk(): void {
    this.speechService.speak('alumnos y materias');
  }

  onLogOut(): void {
    setTimeout(() => {
      this.tokenService.logOut();
      this.router.navigate(['/login']);
    }, 1000);
  }

  sidebarHidden: boolean = true;
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  private convertirRolATexto(rol: string): string{
    switch (rol) {
      case 'ROLE_AUTORIDAD':
        return 'Autoridad';
      case 'ROLE_DOCENTE':
        return 'Docente';  
      case 'ROLE_PADRE':
        return 'Padre';
      case 'ROLE_ESTUDIANTE':
        return 'Estudiante';
      default:
        return '';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
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

  

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.rol = this.tokenService.getAuthority();
      this.rolTexto = this.convertirRolATexto(this.rol);
      this.usuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
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

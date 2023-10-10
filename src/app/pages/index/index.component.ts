import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  rol: string;
  rolTexto: string;

  

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.rol = this.tokenService.getAuthority();
      this.rolTexto = this.convertirRolATexto(this.rol);
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

  menuIcon: string = 'menu'; // Nombre del ícono inicial

  onToggleMenu() {
    this.menuIcon = this.menuIcon === 'menu' ? 'close' : 'menu'; // Cambiar el ícono entre 'menu' y 'close'
    // También puedes agregar aquí la lógica para mostrar/ocultar el menú desplegable.
  }


}

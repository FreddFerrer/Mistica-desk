import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { AlumnosModalComponent } from './pages/alumnos/alumnos-modal/alumnos-modal.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { AlumnosMateriasComponent } from './pages/docentes/alumnos-materias/alumnos-materias.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'docentes', component: DocentesComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'alumnosmaterias', component: AlumnosMateriasComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

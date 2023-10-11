import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './common/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './services/interceptor.service';
import { AlumnosModalComponent } from './pages/alumnos/alumnos-modal/alumnos-modal.component';
import { MateriasModalComponent } from './pages/materias/materias-modal/materias-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    MenuComponent,
    AlumnosComponent,
    DocentesComponent,
    MateriasComponent,
    AlumnosModalComponent,
    MateriasModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

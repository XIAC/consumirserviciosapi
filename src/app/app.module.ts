import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelModule } from 'primeng/panel';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { FormsModule } from '@angular/forms';
import { ApiEjemploComponent } from './api-ejemplo/api-ejemplo.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListaEmpleadoComponent,
    ApiEjemploComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

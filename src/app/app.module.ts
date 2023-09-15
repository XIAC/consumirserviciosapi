import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { FormsModule } from '@angular/forms';
import { ApiEjemploComponent } from './api-ejemplo/api-ejemplo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListaEmpleadoComponent,
    ApiEjemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

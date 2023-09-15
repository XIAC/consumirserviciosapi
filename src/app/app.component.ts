import { Component, Input, ViewChild } from '@angular/core';
import { Empleado } from './models/empleado.model';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoservicios';
  empleado : Empleado;
  @ViewChild(ListaEmpleadoComponent) listaEmpleadoComponente? : ListaEmpleadoComponent;
  constructor() {
    this.empleado = new Empleado;
  }
  recibirEmpleado(event : Empleado){
    this.empleado = event;
    this.listaEmpleadoComponente?.agregarLista(this.empleado);
  }

}

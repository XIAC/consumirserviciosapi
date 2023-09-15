import { Component } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent {
  listaEmpleados : Empleado[];

  constructor() {
    this.listaEmpleados = [];
  }

  agregarLista(empleado : Empleado){
    this.listaEmpleados.push(empleado);
    console.log(this.listaEmpleados);
  }
}

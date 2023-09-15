import { Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleadoEntidad : Empleado = new Empleado;
  @Output() enviarEmpleado = new EventEmitter<Empleado>();

  constructor() {
  }
  agregarEmpleado(){
    console.log(this.empleadoEntidad);
    this.enviarEmpleado.emit(this.empleadoEntidad);
    this.inicializar();
  }
  inicializar(){
    this.empleadoEntidad = new Empleado;
  }
}

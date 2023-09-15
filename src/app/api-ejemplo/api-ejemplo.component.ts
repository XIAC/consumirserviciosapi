import { Component } from '@angular/core';
import { DummyApiService } from '../services/dummy-api.service';
import { Resultado } from '../models/resultado.model';

@Component({
  selector: 'app-api-ejemplo',
  templateUrl: './api-ejemplo.component.html',
  styleUrls: ['./api-ejemplo.component.css']
})
export class ApiEjemploComponent {
  resultado : Resultado  = new Resultado;
  // listaEmpleados : any;
  constructor(private dummyApiService: DummyApiService) {
    this.getEmpleados();

  }
  getEmpleados(){
    this.dummyApiService.getEmpleados().subscribe(
      (satisfactorio) => {this.resultado = satisfactorio},
      (error) => console.log(error),
    );
  }
}

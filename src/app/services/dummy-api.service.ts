import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../models/resultado.model';
@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  URL: string = 'https://dummy.restapiexample.com/api/v1/';
  URL_POKE: string = 'https://pokeapi.co/api/v2/'
  // localhost:80/api/getAlumnos
  constructor(private http : HttpClient) {

  }
  getEmpleados(){
    // return this.http.get<Resultado>(this.URL+'employees');
    return this.http.get<Resultado>(this.URL_POKE+'pokemon/ditto');
  }

}

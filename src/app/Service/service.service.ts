import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profesor } from '../Modelo/Profesor';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  getProfesores(){
    return this.http.get<Profesor[]>('http://localhost:8001/listar-profesores');
  }
}

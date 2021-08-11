import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/Modelo/Profesor';
import {ServiceService} from 'src/app/Service/service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colegio-olimpo';
  profesores: Profesor[] = [];
  constructor(private service:ServiceService, private router:Router, public modal:NgbModal){
  }
  ngOnInit(): void {
    this.service.getProfesores().subscribe(data=>{this.profesores=data;
    })
  }
}

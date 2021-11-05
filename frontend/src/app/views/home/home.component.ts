import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/components/product/cep.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cep : string | undefined;

  constructor(private headerService: HeaderService, private router: Router) { 

    headerService.headerData ={
      title: 'Inicio',
      icon: 'home',
      routerUrl: ''
    }

  }

  ngOnInit(): void {
  }
  
  getRua(cep:string) {
    this.router.navigate(['cep/read/logradouro/', cep]);    
  }

  getCep(cep:string) {
    this.router.navigate(['cep/read/', cep]);    
  }

}

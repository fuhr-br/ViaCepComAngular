import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from './../cep.model';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-cep-read',
  templateUrl: './cep-read.component.html',
  styleUrls: ['./cep-read.component.css']
})
export class CepReadComponent implements OnInit {
  cep : Cep[] 
  Viacep : Cep
  DoViaCep : Cep

  displayedColumns = ['cep','bairro']; 

    constructor(private router : Router, private productService : ProductService, private route : ActivatedRoute) { 
      this.cep = [{}]
      this.Viacep = {}
     this.DoViaCep = {}
     console.log(this.DoViaCep)
     console.log(this.Viacep)
   
    }
  
    ngOnInit(): void {
      
      this.productService.readByAllCep().subscribe( cep => {
        this.cep = cep
        
      })
      const id = ""+ this.route.snapshot.paramMap.get("cep");
      this.productService.readByCep(id).subscribe(cep2 => {
        this.DoViaCep = cep2
      
      })

     
   
    }
  
  }
  
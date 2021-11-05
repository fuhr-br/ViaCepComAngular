import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep } from './../cep.model';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-cep-read',
  templateUrl: './cep-read.component.html',
  styleUrls: ['./cep-read.component.css']
})
export class CepReadComponent implements OnInit {

 
  DoViaCep : Cep

    constructor( private productService : ProductService, private route : ActivatedRoute) { 
 
 
     this.DoViaCep = {}
 
   
    }
  
    ngOnInit(): void {
      
      const cep = ""+ this.route.snapshot.paramMap.get("cep");
      this.productService.readByCep(cep).subscribe(cep => {
        this.DoViaCep = cep
      
      })

    }
  
  }
  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from '../cep.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cep-read-logradouro',
  templateUrl: './cep-read-logradouro.component.html',
  styleUrls: ['./cep-read-logradouro.component.css']
})
export class CepReadLogradouroComponent implements OnInit {
  cep : Cep[] 


  displayedColumns = ['cep','bairro']; 
  constructor(private router : Router, private productService : ProductService, private route : ActivatedRoute) { 
    this.cep = [{}]

  }

  ngOnInit(): void {

    this.productService.readByAllCep().subscribe( cep => {
      this.cep = cep
      
    })

  }

}

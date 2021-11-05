import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep } from '../cep.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cep-read-logradouro',
  templateUrl: './cep-read-logradouro.component.html',
  styleUrls: ['./cep-read-logradouro.component.css']
})
export class CepReadLogradouroComponent implements OnInit {
  cep : Cep[] 


  displayedColumns = ['cep','rua', 'bairro']; 
  constructor( private productService : ProductService, private route : ActivatedRoute) { 
    this.cep = [{}]

  }

  ngOnInit(): void {

    const logradouro = ""+ this.route.snapshot.paramMap.get("cep");
    this.productService.readByAllCep(logradouro).subscribe( cep => {
      this.cep = cep
      
    })

  }

}

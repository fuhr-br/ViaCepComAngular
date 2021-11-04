import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
product : Product;

  constructor(private router : Router, private productService : ProductService, private route : ActivatedRoute) {
    this.product = {}
   }

  ngOnInit(): void {

    const id = ""+ this.route.snapshot.paramMap.get("id");
   id && this.productService.readById(id).subscribe(product => this.product = product );
  }

  deleteProduct(): void{
    this.productService.delete(this.product).subscribe(()=> {
      this.productService.showMessage("Produto EXCLUÍDO com sucesso!")
      this.router.navigate(["/products"]);
    
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import {Cep } from './cep.model'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl = "http://localhost:3001/products"
viaCepUrl = "https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/"
ViaCepUrlOne = "https://viacep.com.br/ws/"
prucarCep = "https://viacep.com.br/ws/91150000/json/"


  constructor(private snackBar : MatSnackBar,
              private http : HttpClient) { }

  showMessage(msg: string, isError : boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error']: ['msg-succes']
    } )
  }


   create(product : Product): Observable<Product>{
        return this.http.post<Product>(this.baseUrl, product).pipe(
          map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Impossivel se conectar a base de dados!', true);
    return EMPTY
  }

  read() : Observable<Product []>{
    return this.http.get<Product []>(this.baseUrl)
  }

  readById(id: string) : Observable<Product>{
  const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
    catchError(e => this.errorHandler(e))
  );
  }
  
  update(product: Product): Observable<Product>{
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url, product).pipe(
    map(obj => obj),
  catchError(e => this.errorHandler(e))
);
  }

  delete(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
    catchError(e => this.errorHandler(e))
  );
    }

    readByAllCep() : Observable<Cep[]>{
        return this.http.get<Cep[]>(this.viaCepUrl)
      
    }

    readByViaCep() : Observable<Cep>{
      return this.http.get<Cep>(this.prucarCep)
    
  }


  readByCep(cep: string) : Observable<Cep>{
    const url = `${this.ViaCepUrlOne}${cep}/json/`  
      return this.http.get<Cep>(url).pipe(
        map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
    }




}

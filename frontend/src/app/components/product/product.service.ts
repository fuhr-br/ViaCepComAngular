import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import {Cep } from './cep.model'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

viaCepUrlLogradouro = "https://viacep.com.br/ws/RS/Porto%20Alegre"
ViaCepUrlOne = "https://viacep.com.br/ws/"
prucarCep = "https://viacep.com.br/ws/91150000/json/"


  constructor(private http : HttpClient) { }


    readByAllCep(logradouro: string) : Observable<Cep[]>{
      const url = `${this.viaCepUrlLogradouro}/${logradouro}/json/` 
        return this.http.get<Cep[]>(url)
      
    }

    readByViaCep() : Observable<Cep>{
      return this.http.get<Cep>(this.prucarCep)
    
  }
 
  readByCep(cep: string) : Observable<Cep>{
    const url = `${this.ViaCepUrlOne}${cep}/json/`  
      return this.http.get<Cep>(url)
    }

}

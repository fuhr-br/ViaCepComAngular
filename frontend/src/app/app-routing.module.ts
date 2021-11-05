
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';


import { CepReadComponent } from './components/product/cep-read/cep-read.component';
import { CepReadLogradouroComponent } from './components/product/cep-read-logradouro/cep-read-logradouro.component';

const routes: Routes = [
  {
  path:"",
  component:HomeComponent
  },
  {
  path: "cep/read",
  component : CepReadComponent
  },
  {
  path: "cep/read/:cep",
  component : CepReadComponent
},
{
  path: "cep/read/logradouro/:cep",
  component : CepReadLogradouroComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

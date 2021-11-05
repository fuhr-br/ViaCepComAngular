
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';


import { CepReadComponent } from './components/product/cep-read/cep-read.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarGeneroComponent } from './Components/Genero/listar-genero/listar-genero.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

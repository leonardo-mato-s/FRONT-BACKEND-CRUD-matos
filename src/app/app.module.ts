  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListarGeneroComponent } from './Components/Genero/listar-genero/listar-genero.component';
import { AddGeneroComponent } from './Components/Genero/add-genero/add-genero.component';
import { UpdateGeneroComponent } from './Components/Genero/update-genero/update-genero.component';
import { GeneroService } from './services/genero.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ListarGeneroComponent,
    AddGeneroComponent,
    UpdateGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private generoUrl:string = '/genero/all';
  constructor(private http: HttpClient) { }

  getGeneros():Observable<Genero[]>{
    return this.http.get<Genero[]>(this.generoUrl);
  }
}
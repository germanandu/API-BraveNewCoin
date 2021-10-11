import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {ListaMonedas} from '../../interfaces/listamonedas.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://bravenewcoin.p.rapidapi.com/asset"
  constructor(private http:HttpClient) { }

  getAllMonedas():Observable<ListaMonedas>{
    let headers = {'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    'x-rapidapi-key': '2a941a22c3mshf7b7c259fd50d1fp1df59djsne6f8b0858c6b'}
    return this.http.get<ListaMonedas>(this.url,{headers})
  }

  getMonedaWithSymbol(param:string):Observable<ListaMonedas>{
    let headers = {'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    'x-rapidapi-key': '2a941a22c3mshf7b7c259fd50d1fp1df59djsne6f8b0858c6b'}
    let params = {'symbol': param};
    return this.http.get<ListaMonedas>(this.url,{headers,params})
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

//import {  tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limiti=100';

  constructor(
private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
       res.results.map( (resPokemons: any) => {
     this.apiGetPokemons(resPokemons.url)
       })
        
      })
    )
  }

  public apiGetPokemons( url: string ) {
    
  }
}
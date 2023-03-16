import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "X tudo",
    "X salada",
    "X feijao",
  ]

  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  /* 
    public foodList(){
      return this.list;
    } */


  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(res => res, error => error)
  }

  /* public foodListAdd(value: string) {
    this.foodListAlert(value)
    return this.list.push(value)
  } */

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value}).pipe( res => res,
      error => error)
  } 
  
  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value)
  }
}

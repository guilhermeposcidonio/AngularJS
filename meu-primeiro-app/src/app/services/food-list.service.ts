import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['X bacon', 'X tudo', 'X salada'];
  constructor() {}

  public foodList() {
    return this.list;
  }
}

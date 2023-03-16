import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList | any;
  constructor(private list: FoodListService) { }

  ngOnInit(): void {
    this.list.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    );

    this.list.emitEvent.subscribe(
      res => {
        alert(`Add this  => ${res.nome}`)
        return this.foodList.push(res)
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: FoodList | any;
  constructor(private list: FoodListService) {}

  ngOnInit(): void {
    this.list.foodList().subscribe(
      (res) => (this.foodList = res),
      (error) => console.log(error)
    );

    this.list.emitEvent.subscribe((res) => {
      alert(`Add this  => ${res.nome}`);
      return this.foodList.push(res);
    });
  }
  public foodListDelete(id: number) {
    return this.list.foodListDelete(id).subscribe(
      (res) => {
        this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        });
      },
      (error) => error
    );
  }

  public foodListEdit(value: string, id: number) {
    return this.list.foodListEdit(value, id).subscribe(
      (res) => {
        return console.log(res);
      },
      (error) => error
    );
  }
}

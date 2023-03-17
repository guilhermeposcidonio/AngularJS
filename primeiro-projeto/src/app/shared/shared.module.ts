import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodListComponent } from './food-list/food-list.component';
import { InputComponent } from './input/input.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [NewComponentComponent, InputComponent, OutputComponent, FoodAddComponent, FoodListComponent],
  exports: [NewComponentComponent, InputComponent, OutputComponent, FoodAddComponent, FoodListComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class SharedModule {}

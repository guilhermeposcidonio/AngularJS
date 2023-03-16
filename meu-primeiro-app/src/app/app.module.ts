import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './shared/food-list/food-list.component';
import { FoodAddComponent } from './shared/food-add/food-add.component';

@NgModule({
  declarations: [AppComponent, FoodListComponent, FoodAddComponent],
  imports: [BrowserModule, AppRoutingModule, FoodAddComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

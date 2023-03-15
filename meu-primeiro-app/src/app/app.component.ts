import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-food-list></app-food-list>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}

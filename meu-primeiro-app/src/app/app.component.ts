import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-food-list></app-food-list>
    <app-food-add></app-food-add>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}

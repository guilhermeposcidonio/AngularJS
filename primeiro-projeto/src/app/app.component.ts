import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-atributos>
      <h1>Aulas de diretivas Atributos</h1>
      <p>Roda pe</p>
    </app-diretivas-atributos>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-data-biding></app-data-biding>
    <app-new-component></app-new-component>
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">add</button>

    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>
    <app-food-list></app-food-list>
    <app-food-add></app-food-add>
    <app-forms></app-forms>
  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 10;

  public getDados: { nome: string; idade: number } | undefined;
  constructor() {}
  //void é quando se espera um retorno
  ngOnInit(): void {}
  /* adciona e atualiza o valor do input */
  public add() {
    this.addValue += 1;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}

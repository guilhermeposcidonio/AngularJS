import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Guilherme', idade: 45 },
    { nome: 'Irneu', idade: 5 },
    { nome: 'Abreu', idade: 25 },
    { nome: 'Bertolomeu', idade: 34 },
    { nome: 'Jubileu', idade: 64 },
  ]
  constructor() { }
  ngOnInit(): void { }
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
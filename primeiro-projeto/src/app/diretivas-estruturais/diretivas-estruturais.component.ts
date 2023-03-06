import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public nome1: string = "";


  public list1: Array<{ nome1: string }> = [
    { nome1: 'Guilherme' },
    { nome1: 'Kleybiscon' },
    { nome1: 'Juvenal' }];

  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Guilherme', idade: 15 },
    { nome: 'Kleybiscon', idade: 46 },
    { nome: 'Juvenal', idade: 10 }];

  public nome: string = 'Pesquise um nome'
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)

  }
  public onClick() {
    if (this.condition) {
      this.condition = false;
    } else {
      this.condition = true;
    }
  }

  public onClickList() {
    this.list.push({ nome: 'testeInserçãoList', idade: 9999 })
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

  public salvar() {
    this.list1.push({ nome1: this.nome1 })
    this.nome1 = "";
  }
}

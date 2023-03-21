import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public listComidas: Array<{ comida: string }> = [{ comida: 'x-salada' }, { comida: 'x-bacon' }, { comida: 'x-teco' }];
  constructor() {}

  ngOnInit(): void {}

  public submitForm(form: NgForm) {
    console.log(form.value);
  }
}

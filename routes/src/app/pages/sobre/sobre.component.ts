import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* pega os paramatrops na rota  */
    this.activedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)

    )
    // pega os parametros concatenado com objetos ?nome=guilherme
    this.activedRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
}

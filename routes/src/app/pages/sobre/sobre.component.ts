import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /* pega os paramatrops na rota  */
    this.activedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)

    )
    // pega os parametros concatenado com objetos ?nome=guilherme
    this.activedRoute.queryParams.subscribe(
      res => console.log(res)
    )

    setInterval(() => {
      /* vai para rota sem dar o reload na pagina  */
      this.router.navigate(['404']);
      /* vai para rota com o reload */
      this.router.navigateByUrl('404');
    }, 5000)
  }
}

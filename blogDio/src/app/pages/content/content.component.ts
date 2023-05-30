import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  link: string = "";
  public id: string | null = "0"
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    if (this.id == '1') {
      this.link = 'https://www.linkedin.com/in/guilhermeposcidonio/'
      // this.photoCover = 'https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg'
      this.contentTitle = "Clique aqui para acessar meu linkedin"
      this.contentDescription = "Aqui você ter mais informações sobre minha carreira !"
    }
    if (this.id == '2') {
      this.link = 'https://www.facebook.com/guilherme.augusto.1422/'
      // this.photoCover = "https://thumbs.dreamstime.com/b/facebook-gosta-dos-polegares-acima-do-%C3%ADcone-do-s%C3%ADmbolo-52122552.jpg"
      this.contentTitle = "Clique aqui para acessar meu Facebook"
      this.contentDescription = "Aqui você tera mais informações sobre minha vida pessoal !"
    }
    if (this.id == '3') {
      this.link = 'https://www.instagram.com/guilhermeposcidonio/'
      //this.photoCover = "https://files.tecnoblog.net/wp-content/uploads/2022/03/instagram-capa-1.jpg"
      this.contentTitle = "Clique aqui para acessar meu Instagram"
      this.contentDescription = "Aqui você tera mais informações sobre minha vida pessoal !"
    }
    if (this.id == '4') {
      this.link = 'guilhermeposcidonio@gmail.com'
      //this.photoCover = "https://img.freepik.com/icones-gratis/gmail_318-265165.jpg"
      this.contentTitle = "Clique aqui para acessar meu Email"
      this.contentDescription = "Aqui podermos ter um bate papo amis formal !"
    }
  }

  setValuesToComponent(id: string | null) {
    const result = data.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}

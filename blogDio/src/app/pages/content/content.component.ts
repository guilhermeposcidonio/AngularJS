import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Ffotos-gratis%2Fwallpaper&psig=AOvVaw0lU0w_ro7kqtIqlHR88Fb4&ust=1684286865778000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCOsdTX-P4CFQAAAAAdAAAAABAE";
  contentTitle: string = "Notica exemplo";
  contentDescription: string = "Descrição";
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    )
  }
}

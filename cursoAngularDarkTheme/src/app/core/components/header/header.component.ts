import { Component, OnInit } from '@angular/core';
import { Etheme } from '../../enums/Etheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public icon: string = Etheme.ICON_MOON;
public textTheme: string = Etheme.ICON_MOON;

  constructor() { }

  ngOnInit(): void {

  }
  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    if(theme){
      return (this.icon = Etheme.ICON_SUN, this.textTheme = Etheme.ICON_SUN)
    }
    return (this.icon = Etheme.ICON_MOON, this.textTheme = Etheme.ICON_MOON)
  }
}

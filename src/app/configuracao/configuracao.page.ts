import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor() { }

  onToggleColorTheme(event) {
    
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark' );
     
    } else {
      document.body.setAttribute('color-theme', 'light' );
     
    }
  }

  ngOnInit() {
  }

}

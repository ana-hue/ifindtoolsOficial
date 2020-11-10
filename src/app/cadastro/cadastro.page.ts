import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public authService: AuthService,
              public router: Router,
              public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  onFormSubmit(form){
    if(!form.valid)
      return false;
    else{
      localStorage.setItem("cadastro_primeiro",JSON.stringify(form.value));
      this.router.navigate(['/tela-de-cadastro2'])
    }
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

}

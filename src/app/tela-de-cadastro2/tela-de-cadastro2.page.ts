import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../shared/auth.service';
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-de-cadastro2',
  templateUrl: './tela-de-cadastro2.page.html',
  styleUrls: ['./tela-de-cadastro2.page.scss'],
})
export class TelaDeCadastro2Page implements OnInit {

  constructor(public menuCtrl: MenuController,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }


  onFormSubmit(form){
    if(!form.valid)
      return false;
    else{
      const user = JSON.parse(localStorage.getItem("cadastro_primeiro"));
      const userData: Usuario = {
        nome: user.nome,
        email: user.email,
        genero: form.value.genero,
        cidade: form.value.cidade,
        estado: form.value.estado,
        datnasc: form.value.datnasc
        
       
      }

      this.authService.RegisterUser(user.email, user.senha, userData);
      
    }
  }


}

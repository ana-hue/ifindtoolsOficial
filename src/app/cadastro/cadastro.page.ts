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


  
  cadastro(nome, email, genero, password, cidade, estado, datnasc){


    
    const userData: Usuario = {
      nome: nome.value,
      email: email.value,
      genero: genero.value,
      cidade: cidade.value,
      estado: estado.value,
      datnasc: datnasc.value
     
    }

    this.authService.RegisterUser(email.value, password.value, userData);
    console.log(nome.value);
    console.log(email.value);
    console.log(genero.value);
    this.router.navigate(["ferramenta"]);
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})



export class CadastroPage implements OnInit {

  constructor(public authService: AuthService,
    public router: Router,
    public menuCtrl: MenuController,
    public alertController: AlertController
   ) {

  }



  ngOnInit() {
  }

  async erroSenha() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Senhas invalidas',
      message: 'As senhas não estão iguais! Tente novamente!',
      buttons: ['Voltar']
    });

    await alert.present();
    this.router.navigate(['/cadastro']);
  }

  

  onFormSubmit(form) {
    if (!form.valid)
      return false;
      // ALELUIA EU SO ESQUECI O FORM
    else if (form.value.senha != form.value.confirmar) {
      return this.erroSenha();
    }
    else {
      localStorage.setItem("cadastro_primeiro", JSON.stringify(form.value));
      this.router.navigate(['/tela-cadastro2'])
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, public router: Router,
              public menuController: MenuController) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
    .then((res) => {
      this.router.navigate(["usuario"]);
      
    })
    .catch((error) => {
      let msg = "";
      switch(error.code) {
        case "auth/invalid-email":
          msg = "Email invalido!";
          this.router.navigate(["login"]);
          break;
        case "auth/user-not-found":
          msg = "Usuario invalido!";
          this.router.navigate(["login"]);
          break;
        case "auth/wrong-password":
          msg = "Senha incorreta!";
          this.router.navigate(["login"]);
          break;
      }
      window.alert(msg);
    })
  }

  ionViewWillEnter(){
    this.menuController.enable(false);
  }

}

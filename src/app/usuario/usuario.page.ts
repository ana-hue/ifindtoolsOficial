import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MenuController } from "@ionic/angular";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  emailusuario = "Email@";
  

  constructor(public authService: AuthService, public menuController: MenuController,
              public ngFireAuth: AngularFireAuth,
              public ngFirestore: AngularFirestore) { }

  ngOnInit() {
    this.emailusuario = this.authService.emailUser
    
  }
  

  


  ionViewWillEnter(){
    this.menuController.enable(true);
  }

}

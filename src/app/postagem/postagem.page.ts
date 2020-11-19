import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CrudService } from '../shared/crud.service';
import { Platform } from '@ionic/angular';
import { Ferramenta } from '../interface/ferramenta';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.page.html',
  styleUrls: ['./postagem.page.scss'],
})
export class PostagemPage implements OnInit {

  emailusuario = "Email@";
  nomeferramenta = "";
  id = "";
  ferramenta: Ferramenta = {
    nomeferramenta: "",
    preco: "",
    dia: "",
    descricao: ""
  }

  constructor(public authService: AuthService,
    public ngFireAuth: AngularFireAuth,
    public ngFirestore: AngularFirestore,
    public platform: Platform,
    public crudService: CrudService) { }

  ngOnInit() {
    this.emailusuario = this.authService.emailUser;

    let url = this.platform.url().split("/");
    this.id = url[url.length-1] || "";
  
    this.crudService.getFerramentList().doc(this.id).get().forEach( res => {
      let dataFerramenta = res.data();
      this.ferramenta = dataFerramenta as Ferramenta; 
    })
  }

}

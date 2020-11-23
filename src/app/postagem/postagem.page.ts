import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CrudService } from '../shared/crud.service';
import { Platform } from '@ionic/angular';
import { Ferramenta } from '../interface/ferramenta';
import { Usuario } from '../interface/usuario';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.page.html',
  styleUrls: ['./postagem.page.scss'],
})
export class PostagemPage implements OnInit {

  emailusuario = "";
 usuario: Usuario = {
  nome: "",
  email: "",
  genero: "",
  cidade: "",
  estado: "",
  datnasc: ""
 }
 
  id = "";
  ferramenta: Ferramenta = {
    nomeferramenta: "",
    preco: "",
    dia: "",
    descricao: "",
    usuario: JSON.parse(localStorage.getItem("cadastro_primeiro"))
  }

  constructor(public authService: AuthService,
    public ngFireAuth: AngularFireAuth,
    public ngFirestore: AngularFirestore,
    public platform: Platform,
    public crudService: CrudService,
    public menuCtrl: MenuController) { }

  ngOnInit() {
    this.emailusuario = this.authService.emailUser;

    let url = this.platform.url().split("/");
    this.id = url[url.length-1] || "";
  
    this.crudService.getFerramentList().doc(this.id).get().forEach( res => {
      let dataFerramenta = res.data();
      this.ferramenta = dataFerramenta as Ferramenta; 
    })

    this.authService.getUsuarioList().doc(this.id).get().forEach( res => {
      let dataUsuario = res.data();
      this.usuario = dataUsuario as Usuario; 
    })
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
}

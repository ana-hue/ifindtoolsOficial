import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MenuController } from "@ionic/angular";
import { Platform } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario} from '../interface/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

 
  arrUsuario = [];

  id = "";
  usuario: Usuario = {
    nome: "",
    email: "",
    genero: "",
    cidade: "",
    estado: "",
    datnasc: ""
  }

  constructor(public authService: AuthService, public menuController: MenuController,
              public ngFireAuth: AngularFireAuth,
              public ngFirestore: AngularFirestore,
              public platform: Platform) { }

  ngOnInit() {
    


    let usuarioRes = this.authService.getUsuarioList();
    usuarioRes.snapshotChanges().subscribe(
      res => {
        this.arrUsuario = [];
        res.forEach(item =>  {
          let usuarioData = item.payload.doc.data();
          usuarioData['$key'] = item.payload.doc.id;

          this.arrUsuario.push(usuarioData as Usuario);
        })
      })
  }
  

  


  ionViewWillEnter(){
    this.menuController.enable(true);
  }

}

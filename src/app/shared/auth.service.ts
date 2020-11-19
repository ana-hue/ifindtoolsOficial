import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth: AngularFireAuth,
              public router: Router,
              public ngFirestore: AngularFirestore
              ) { 
    this.ngFireAuth.authState.subscribe(
      user => {
        if(user) {
          localStorage.setItem("usuario",JSON.stringify(user));
          this.router.navigate(["ferramenta"]);
        }
        else {
          localStorage.setItem("usuario",null);
        }
      }
    )
  }

  get emailUser(): string{
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user.email;
  }

  get ferramentaNome(): string{
    const nomeferramenta = JSON.parse(localStorage.getItem("ferramenta"));
    return nomeferramenta.name;
  }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  SingOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("usuario");
    })
  }

  RegisterUser(email, password, usuario) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((result) => {

    this.createUser(result.user.uid, usuario);
    
    })
  }

  createUser(uid, usuario){
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('Usuario/' + uid);
    const userData: Usuario = {
      nome: usuario.nome,
      email: usuario.email,
      genero: usuario.genero,
      cidade: usuario.cidade,
      estado: usuario.estado,
      datnasc: usuario.datnasc
    }

    userRef.set(userData, { merge: true});

    
    
  }
  
} 

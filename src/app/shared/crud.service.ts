import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Ferramenta } from '../interface/ferramenta';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public ngFirestore: AngularFirestore) { }

  getFerramentList() {
    const ferramentaRef = this.ngFirestore.collection("Ferramenta");
    return ferramentaRef;
  }

  setFerramenta(ferramenta){
    const ferramentaData: Ferramenta = {
      nomeferramenta: ferramenta.nomeferramenta,
      dia: ferramenta.dia,
      preco: ferramenta.preco,
      descricao: ferramenta.descricao
    }

    return this.ngFirestore.collection("Ferramenta").add(ferramentaData);
  }

  updateFerramenta(uid, ferramenta) {
    const ferramentaData: Ferramenta = {
      nomeferramenta: ferramenta.nomeferramenta,
      dia: ferramenta.dia,
      preco: ferramenta.preco,
      descricao: ferramenta.descricao
    }
    const ferramentaRef: AngularFirestoreDocument<any> = this.ngFirestore.doc("Ferramenta/" + uid);
    return ferramentaRef.update(ferramentaData);
  }

  removeFerramenta(uid) {
    const ferramentaRef: AngularFirestoreDocument<any> = this.ngFirestore.doc("Ferramenta/" + uid);
    return ferramentaRef.delete();
  }

}
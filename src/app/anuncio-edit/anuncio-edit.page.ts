import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';  
import { CrudService } from '../shared/crud.service';
import { Ferramenta } from '../interface/ferramenta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncio-edit',
  templateUrl: './anuncio-edit.page.html',
  styleUrls: ['./anuncio-edit.page.scss'],
})
export class AnuncioEditPage implements OnInit {

  id = "";
  ferramenta: Ferramenta = {
    nomeferramenta: "",
    preco: "",
    dia: "",
    descricao: "",
    usuario: JSON.parse(localStorage.getItem("cadastro_primeiro"))
  }

  constructor(public platform: Platform,
              public crudService: CrudService,
              public router: Router) { }

  ngOnInit() {
    let url = this.platform.url().split("/");
    this.id = url[url.length-1] || "";
  
    this.crudService.getFerramentList().doc(this.id).get().forEach( res => {
      let dataFerramenta = res.data();
      this.ferramenta = dataFerramenta as Ferramenta; 
    })
   }

onFormSubmit(form) {
  if (!form.valid) {
    return false;
  }
  else {
    this.crudService.updateFerramenta(this.id,form.value).then(res => {
      form.reset();
      this.router.navigate(['/ferramenta']);

    }).catch(error => console.log(error));

  }
}

}

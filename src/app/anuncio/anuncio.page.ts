import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CrudService } from '../shared/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {

  constructor(public alertController: AlertController,
              public crudService: CrudService,
              public router: Router) { }

  ngOnInit() {
  }

  // Fazeer validação
  onFormSubmit(form) {
    if (!form.valid) {
      return false;
    }
    else {
      this.crudService.setFerramenta(form.value).then(res => {
        form.reset();
        this.router.navigate(['/ferramenta']);

      }).catch(error => console.log(error));

    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Anunciado!',
      message: 'Sua ferramenta foi anunciada com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }


}

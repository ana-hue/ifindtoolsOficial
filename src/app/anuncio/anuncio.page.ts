import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {

  constructor(public alertController: AlertController,
              public crudService: CrudService) { }

  ngOnInit() {
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

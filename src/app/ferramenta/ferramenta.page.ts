import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Ferramenta } from '../interface/ferramenta';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ferramenta',
  templateUrl: './ferramenta.page.html',
  styleUrls: ['./ferramenta.page.scss'],
})
export class FerramentaPage implements OnInit {


  arrFerramentas = [];
  arrFerramentasFilter = [];

  constructor(public crudService: CrudService,
    public alertController: AlertController,
    public menuCtrl: MenuController,
    public router: Router) { }



  ngOnInit() {

    let ferramentaRes = this.crudService.getFerramentList();
    ferramentaRes.snapshotChanges().subscribe(
      res => {
        this.arrFerramentas = [];
        res.forEach(item => {
          debugger;
          let ferramentaData = item.payload.doc.data();
          ferramentaData['$key'] = item.payload.doc.id;

          this.arrFerramentas.push(ferramentaData as Ferramenta);
          this.arrFerramentasFilter = this.arrFerramentas;
        })
      })
      
  }
  async excluirDocinho(uid) {
    this.router.navigate(['ferramenta']);
    const alert = await this.alertController.create({

      header: "Vai excluir mesmo?",
      message: "Após deletar não havera volta!",
      buttons: [
        {
          text: 'Voltar',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {
            this.router.navigate(['ferramenta']);
          }
        },
        {
          text: 'Deletar',
          handler: () => {
            this.crudService.removeFerramenta(uid);
            this.router.navigate(['ferramenta']);


          }

        }

      ]
    })

    await alert.present();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  search(evt) {
    var key: string = evt.target.value;
    var lowerCaseKey = key.toLowerCase();
    this.arrFerramentas = this.arrFerramentasFilter.filter(p => p.nomeferramenta.toLowerCase().indexOf(lowerCaseKey) > -1 );
  }
}



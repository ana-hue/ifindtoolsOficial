import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Ferramenta } from '../interface/ferramenta';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-ferramenta',
  templateUrl: './ferramenta.page.html',
  styleUrls: ['./ferramenta.page.scss'],
})
export class FerramentaPage implements OnInit {


  arrFerramentas = [];


  constructor(public crudService: CrudService,
        public alertController: AlertController,
        public menuCtrl: MenuController) { }



  ngOnInit() {

    let ferramentaRes = this.crudService.getFerramentList();
    ferramentaRes.snapshotChanges().subscribe(
      res => {
        this.arrFerramentas = [];
        res.forEach(item => {debugger;
          let ferramentaData = item.payload.doc.data();
          ferramentaData['$key'] = item.payload.doc.id;

          this.arrFerramentas.push(ferramentaData as Ferramenta);
        })
      })

  }
  async excluirDocinho(uid) {
    const alert = await this.alertController.create({
      header: "Vai excluir mesmo?",
      message: "Após deletar vai ficar sem os docinhos, não havera volta!",
      buttons: [
          {
            text: 'Voltar',
            role: 'cancel',
            cssClass: 'success'
          },
          {
            text: 'Deletar',
            handler: () => {
              this.crudService.removeFerramenta(uid);

          
            },
            cssClass: 'danger'
          }

      ]
    })
   
     await alert.present();
  }
  
  ionViewWillEnter(){
    this.menuCtrl.enable(true);
  }

}



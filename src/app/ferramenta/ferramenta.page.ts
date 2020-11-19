import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Ferramenta } from '../interface/ferramenta';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Usuario} from '../interface/usuario';


@Component({
  selector: 'app-ferramenta',
  templateUrl: './ferramenta.page.html',
  styleUrls: ['./ferramenta.page.scss'],
})
export class FerramentaPage implements OnInit {


  arrFerramentas = [];
  arrUsuario = [];


  constructor(public crudService: CrudService,
        public alertController: AlertController,
        public menuCtrl: MenuController,
        public router: Router,
        public authService: AuthService) { }



  ngOnInit() {

    let ferramentaRes = this.crudService.getFerramentList();
    ferramentaRes.snapshotChanges().subscribe(
      res => {
        this.arrFerramentas = [];
        res.forEach(item => {
          let ferramentaData = item.payload.doc.data();
          ferramentaData['$key'] = item.payload.doc.id;

          this.arrFerramentas.push(ferramentaData as Ferramenta);
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
  
  ionViewWillEnter(){
    this.menuCtrl.enable(true);
  }

}



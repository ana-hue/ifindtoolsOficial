import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDeCadastro2PageRoutingModule } from './tela-de-cadastro2-routing.module';

import { TelaDeCadastro2Page } from './tela-de-cadastro2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDeCadastro2PageRoutingModule
  ],
  declarations: [TelaDeCadastro2Page]
})
export class TelaDeCadastro2PageModule {}

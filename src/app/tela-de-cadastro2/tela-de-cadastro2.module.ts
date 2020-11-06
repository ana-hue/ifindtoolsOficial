import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDeCadastro2PageRoutingModule } from './tela-de-cadastro2-routing.module';

import { TelaDeCadastro2Page } from './tela-de-cadastro2.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDeCadastro2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TelaDeCadastro2Page]
})
export class TelaDeCadastro2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaAzulPageRoutingModule } from './tela-azul-routing.module';

import { TelaAzulPage } from './tela-azul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaAzulPageRoutingModule
  ],
  declarations: [TelaAzulPage]
})
export class TelaAzulPageModule {}

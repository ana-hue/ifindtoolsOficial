import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrocartaoPageRoutingModule } from './cadastrocartao-routing.module';

import { CadastrocartaoPage } from './cadastrocartao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrocartaoPageRoutingModule
  ],
  declarations: [CadastrocartaoPage]
})
export class CadastrocartaoPageModule {}

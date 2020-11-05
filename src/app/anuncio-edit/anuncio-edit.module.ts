import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnuncioEditPageRoutingModule } from './anuncio-edit-routing.module';

import { AnuncioEditPage } from './anuncio-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioEditPageRoutingModule
  ],
  declarations: [AnuncioEditPage]
})
export class AnuncioEditPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FerramentaPageRoutingModule } from './ferramenta-routing.module';

import { FerramentaPage } from './ferramenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerramentaPageRoutingModule
  ],
  declarations: [FerramentaPage]
})
export class FerramentaPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnuncioEditPage } from './anuncio-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AnuncioEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnuncioEditPageRoutingModule {}

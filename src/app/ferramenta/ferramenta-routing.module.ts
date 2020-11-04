import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerramentaPage } from './ferramenta.page';

const routes: Routes = [
  {
    path: '',
    component: FerramentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerramentaPageRoutingModule {}



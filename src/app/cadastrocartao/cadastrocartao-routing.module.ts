import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrocartaoPage } from './cadastrocartao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrocartaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrocartaoPageRoutingModule {}

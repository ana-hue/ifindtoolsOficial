import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDeCadastro2Page } from './tela-de-cadastro2.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDeCadastro2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDeCadastro2PageRoutingModule {}

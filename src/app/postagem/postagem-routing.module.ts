import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostagemPage } from './postagem.page';

const routes: Routes = [
  {
    path: '',
    component: PostagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostagemPageRoutingModule {}

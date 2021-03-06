import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'ferramenta',
    loadChildren: () => import('./ferramenta/ferramenta.module').then( m => m.FerramentaPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastrocartao',
    loadChildren: () => import('./cadastrocartao/cadastrocartao.module').then( m => m.CadastrocartaoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'anuncio',
    loadChildren: () => import('./anuncio/anuncio.module').then( m => m.AnuncioPageModule)
  },
  {
    path: 'usuario/:id',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'postagem/:id',
    loadChildren: () => import('./postagem/postagem.module').then( m => m.PostagemPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'anuncio-edit/:id',
    loadChildren: () => import('./anuncio-edit/anuncio-edit.module').then( m => m.AnuncioEditPageModule)
  },
  {
    path: 'tela-de-cadastro2',
    loadChildren: () => import('./tela-de-cadastro2/tela-de-cadastro2.module').then( m => m.TelaDeCadastro2PageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then( m => m.TermosPageModule)
  }


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  // --------------------------------HOME COMPONENT--------------------------------
  { path: '', component: HomeComponent },
  // --------------------------------HOME COMPONENT--------------------------------

  // --------------------------------ERROR COMPONENT--------------------------------
  { path: 'error', component: ErrorComponent },
  // --------------------------------ERROR COMPONENT--------------------------------

  // --------------------------------DEMO COMPONENT--------------------------------
  // LazyLoading (pra não carregar tudo o que vem na barra de network)
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(module => module.DemoModule) },
  // --------------------------------DEMO COMPONENT--------------------------------

  // --------------------------------NOT FOUND COMPONENT--------------------------------
  { path: '**', component: NotFoundComponent },
  // --------------------------------NOT FOUND COMPONENT--------------------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  // tslint:disable-next-line:max-line-length
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(module => module.DemoModule)}, // LazyLoading (pra não carregar tudo o que vem na barra de network)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

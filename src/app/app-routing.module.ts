import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule'}, // LazyLoading (pra não carregar tudo o que vem na barra de network)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

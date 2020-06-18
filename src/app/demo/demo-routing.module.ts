import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdFormComponent } from './td-form/td-form.component';



const routes: Routes = [
  {
    path: '', component: DemoComponent, children: [
      { path: '', component: TdFormComponent },
      { path: 'reactiveForm', component: ReactiveFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

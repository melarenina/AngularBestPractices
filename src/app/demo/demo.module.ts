import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdFormComponent } from './td-form/td-form.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    TdFormComponent,
    ReactiveFormComponent,
    DemoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }

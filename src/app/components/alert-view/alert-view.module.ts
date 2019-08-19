import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertViewComponent } from './alert-view.component';



@NgModule({
  declarations: [AlertViewComponent],
  exports: [AlertViewComponent],
  imports: [
    CommonModule
  ]
})
export class AlertViewModule { }

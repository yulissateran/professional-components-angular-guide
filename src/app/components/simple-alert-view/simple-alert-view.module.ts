import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleAlertViewComponent } from './simple-alert-view.component';



@NgModule({
  declarations: [SimpleAlertViewComponent],
  exports: [SimpleAlertViewComponent],
  imports: [
    CommonModule
  ]
})
export class SimpleAlertViewModule { }

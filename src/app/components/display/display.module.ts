import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';



@NgModule({
  declarations: [DisplayComponent],
  exports: [DisplayComponent],
  imports: [
    CommonModule
  ]
})
export class DisplayModule { }

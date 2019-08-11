import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input.component';



@NgModule({
  declarations: [FaInputComponent],
  imports: [
    CommonModule
  ],
  exports: [FaInputComponent]
})
export class FaInputModule { }

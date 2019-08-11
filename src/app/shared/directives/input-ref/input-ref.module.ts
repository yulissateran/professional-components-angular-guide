import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './input-ref.directive';



@NgModule({
  declarations: [InputRefDirective],
  imports: [
    CommonModule
  ],
  exports: [InputRefDirective]
})
export class InputRefModule { }

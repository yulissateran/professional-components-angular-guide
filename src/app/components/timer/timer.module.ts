import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';



@NgModule({
  declarations: [TimerComponent],
  exports: [TimerComponent],
  imports: [
    CommonModule
  ]
})
export class TimerModule { }

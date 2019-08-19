import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { DisplayModule } from '../display/display.module';
import { TimerService } from './timer.service';



@NgModule({
  declarations: [TimerComponent],
  exports: [TimerComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    DisplayModule
  ]
})
export class TimerModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { CountdownModule } from './components/countdown/countdown.module';
import { TimerModule } from './components/timer/timer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProgressBarModule,
    CountdownModule,
    TimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { CountdownModule } from './components/countdown/countdown.module';
import { TimerModule } from './components/timer/timer.module';
import { AlertViewModule } from './components/alert-view/alert-view.module';
import { TabsModule } from './components/tabs/tabs.module';
import { TabModule } from './components/tab/tab.module';
import { SimpleAlertViewModule } from './components/simple-alert-view/simple-alert-view.module';
import { SimpleAlertViewComponent } from './components/simple-alert-view/simple-alert-view.component';

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
    TimerModule,
    AlertViewModule,
    SimpleAlertViewModule,
    TabsModule,
    TabModule,
  ],
  entryComponents:[ SimpleAlertViewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

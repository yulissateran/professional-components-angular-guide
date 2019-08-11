import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaInputModule } from './shared/components/fa-icon/fa-input.module';
import { InputRefModule } from './shared/directives/input-ref/input-ref.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaInputModule,
    InputRefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

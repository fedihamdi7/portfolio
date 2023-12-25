import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    TimelineModule,
    TooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

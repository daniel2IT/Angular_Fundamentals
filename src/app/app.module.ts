import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnaulComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import {  EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnaulComponent,
    EventDetailsComponent,
    NavBarComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

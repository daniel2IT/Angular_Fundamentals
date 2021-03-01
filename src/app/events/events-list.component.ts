import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
 selector: 'events-list',
 template: `
<div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <div class="row"> 
    <div *ngFor="let event of event1" class="col-md-5">
      <event-thumbnail  [eventOtherOne]="event"></event-thumbnail>
    </div>
  </div>
</div>
`
})

export class EventsListComponent implements OnInit{
  event1:any;
  constructor(private eventService: EventService){
  }

  ngOnInit(){
    this.event1 = this.eventService.getEvents();
  }
}

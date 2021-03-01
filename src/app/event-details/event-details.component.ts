import { Component } from '@angular/core'
import { EventService } from '../events/shared/event.service'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container
        {
            padding-left:20px; 
            padding-right:20px;
        }
        .event-image: { height: 100px; }
    `]
})

export class EventDetailsComponent
{
    event: { id: number; name: string; date: string; time: string; price: number; imageUrl: string; location: { address: string; city: string; country: string; }; sessions: { id: number; name: string; presenter: string; duration: number; level: string; abstract: string; voters: string[]; }[]; onlineUrl?: undefined; } | { ...; } | undefined;
    
    constructor(private eventService:EventService){

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(1);
    }
}
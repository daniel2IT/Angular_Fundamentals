import { Component } from '@angular/core'

@Component({
 selector: 'events-list',
 template: `
 <div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <event-thumbnail [eventOtherOne]="event1"></event-thumbnail>
  </div>
`
})

export class EventsListComponent{
  event1 = { 
    id: 1, 
    name: 'Daniel',
    date: '2/24/2021',
    time: '10:00am',
    price: 799.99,
    imageUrl: '/assets/images/angular.png',
    location: { 
      address: 'PamPam',
      city: 'Vilnius',
      country: 'Lithuania'
    }
  }
}

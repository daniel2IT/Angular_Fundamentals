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
    date: '9/26/2036',
    time: '10:00am',
    price: 599.99,
    imageUrl: '/assets/images/angular.png',
    location: { 
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}

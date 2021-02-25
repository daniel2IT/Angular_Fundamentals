import { Component } from '@angular/core'

@Component({
 selector: 'events-list',
 templateUrl: './events-list-component.html'
})


export class EventsListComponent{
  event = { 
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
import { Component, Input} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:`
<div class="well hoverwell thumbnail">
    <h2>{{eventOtherOne.name}}</h2>
    <div>Date: {{eventOtherOne.date}}</div>
    <div>Time {{eventOtherOne.time}}</div>
    <div>Price: \${{eventOtherOne.price}}</div>
    <div>
    <span>Location: {{eventOtherOne.location.address}}</span>
    <span class="pad-left">{{eventOtherOne.location.city}},{{eventOtherOne.location.country}}</span>
    </div>
</div>
<img src="/assets/images/angular.png"/>
`,
 styles:[`
    .pad-left{margin-left: 10px}
    .well div { color: #FF0000; }
 `]
})

export class EventThumbnaulComponent{
   // Input tels Angular, that this event would be passed by another component
    @Input() eventOtherOne:any
}
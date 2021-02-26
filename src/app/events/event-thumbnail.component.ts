import { Component, Input} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:`
<div class="well hoverwell thumbnail">
    <h2>{{eventOtherOne?.name}}</h2>
    <div>Date: {{eventOtherOne?.date}}</div>
    <div>Time {{eventOtherOne?.time}}</div>
        <div [ngSwitch]="eventOtherOne?.time">
            <span *ngSwitchCase="'8:00 am'"> Early Start</span>
            <span *ngSwitchCase="'10:00 am'"> Late Start</span>
            <span *ngSwitchDefault> Normal Start</span>
        </div>
    <div>Price: \${{eventOtherOne?.price}}</div>
    <div *ngIf="eventOtherOne?.location">
    <span>Location: {{eventOtherOne?.location?.address}}</span>
    <span class="pad-left">{{eventOtherOne?.location?.city}},{{eventOtherOne?.location?.country}}</span>
    </div>
  <div *ngIf="eventOtherOne?.onlineUrl">
   Online URL: {{eventOtherOne?.onlineUrl}}
   </div>
</div>
<img src="/assets/images/angular.png"/>
`,
 styles:[`
    .thumbnail { min-height:210px; }
    .pad-left{margin-left: 10px; }
    .hoverwell div { color: #bbb; }
 `]
})

export class EventThumbnaulComponent{
   // Input tels Angular, that this 
   //event would be passed by another component
    @Input() eventOtherOne:any
}
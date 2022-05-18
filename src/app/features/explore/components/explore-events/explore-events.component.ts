import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-explore-events',
  templateUrl: './explore-events.component.html',
  styleUrls: ['./explore-events.component.scss']
})
export class ExploreEventsComponent {
  allEvents: any;

  constructor(public eventServ: EventsService) {
    this.allEvents = eventServ.getAllEvents().collection("cityEvents").valueChanges();
  }


}



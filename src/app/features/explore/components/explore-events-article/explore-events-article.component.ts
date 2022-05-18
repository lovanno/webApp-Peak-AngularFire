import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore-events-article',
  templateUrl: './explore-events-article.component.html',
  styleUrls: ['./explore-events-article.component.scss']
})
export class ExploreEventsArticleComponent {

  contructor() { }
  public $specificEvent: Observable<any>;
  public currentRoute: string;

  constructor(public eventServ: EventsService, private router: Router) {
    this.currentRoute = (router.url).slice(16);
    this.currentRoute = this.prettyUrl(this.currentRoute);
    this.currentRoute = this.currentRoute.toLowerCase();
    this.$specificEvent = eventServ.getAllEvents().collection("cityEvents").doc(this.currentRoute).collection("specifics").valueChanges();
  }


  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/%E2%80%99/g, "’").replace(/%20/g, ' ').replace(/%E2%80%93/g, '–').replace(/%C3%B1/g, 'ñ').replace(/-/g, ' ');
    return childRoute;
  }


}

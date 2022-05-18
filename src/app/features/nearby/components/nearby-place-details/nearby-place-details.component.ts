import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaceDetails } from '../../interfaces/place-details';
import { CitiesService } from '../../services/cities.service';
import { CurrentCityService } from '../../services/current-city.service';


@Component({
  selector: 'app-nearby-place-details',
  templateUrl: './nearby-place-details.component.html',
  styleUrls: ['./nearby-place-details.component.scss']
})
export class NearbyPlaceDetailsComponent implements OnInit, OnDestroy {
  private $specificPlace!: Subscription;
  private $city!: Subscription;
  public currentRoute!: string;
  public currentCity!: string;
  public newCity!: string;
  public cityDetails!: PlaceDetails;

  constructor(public appCity: CurrentCityService, public citiesServ: CitiesService, private router: Router) { }

  ngOnInit(): void {
    this.currentCity = this.router.parseUrl(this.router.url).root.children['primary'].segments[1].path;   /*gets the city url part "nearby/{city}" */
    this.appCity.setCity(this.prettyUrl(this.currentCity));

    this.$city = this.appCity.currentCity$.subscribe(f => this.currentCity = f);
    this.currentRoute = this.router.parseUrl(this.router.url).root.children['primary'].segments[2].path; /*gets the place url "nearby/city/{place}"*/

    /*First, the specificPlace is grabbed. This returns an observable and then we subscribe to it to get its value*/
    this.$specificPlace = this.citiesServ.getSpecificPlace((this.currentCity.toLowerCase()), this.prettyUrl(this.currentRoute))
      .subscribe(f => {
        if (f) {
          this.cityDetails = f
        }
      })
  }


  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/-/g, ' ');
    return childRoute
  }


  ngOnDestroy() {
    this.$city.unsubscribe();
    this.$specificPlace.unsubscribe();
  }

}

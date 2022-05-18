import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subscription, take, takeLast } from 'rxjs';
import { PlaceDetails } from '../../interfaces/place-details';
import { CitiesService } from '../../services/cities.service';
import { CurrentCityService } from '../../services/current-city.service';


@Component({
  selector: 'app-nearby-place-details',
  templateUrl: './nearby-place-details.component.html',
  styleUrls: ['./nearby-place-details.component.scss']
})
export class NearbyPlaceDetailsComponent implements OnInit, OnDestroy {
  public $specificPlace!: Subscription;
  public currentRoute!: string;
  public currentCity!: string;
  $city!: Subscription;
  cityDetails!: PlaceDetails;
  newCity!: string;

  constructor(public appCity: CurrentCityService, private router: Router, public citiesServ: CitiesService) {

  }

  ngOnInit(): void {
    this.currentCity = this.router.parseUrl(this.router.url).root.children['primary'].segments[1].path;
    this.appCity.setCity(this.currentCity);

    this.$city = this.appCity.currentCity$.subscribe(f => this.currentCity = f);
    this.currentRoute = this.router.parseUrl(this.router.url).root.children['primary'].segments[2].path;

    this.$specificPlace = this.citiesServ.getSpecificPlace((this.currentCity.toLowerCase()), this.currentRoute.toLowerCase()).subscribe(f => { if (f) { this.cityDetails = f } });
  }


  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/%20/g, ' ')
    return childRoute
  }


  ngOnDestroy() {
    this.$city.unsubscribe();
    this.$specificPlace.unsubscribe();
  }



}

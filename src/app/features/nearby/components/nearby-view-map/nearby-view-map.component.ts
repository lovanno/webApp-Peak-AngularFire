import { Component, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CitiesService } from '../../services/cities.service';
import { CurrentCityService } from '../../services/current-city.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nearby-view-map',
  templateUrl: './nearby-view-map.component.html',
  styleUrls: ['./nearby-view-map.component.scss']
})
export class NearbyViewMapComponent implements OnInit, OnDestroy {
  @Output() cityImg = new EventEmitter();
  @Output() cityCord = new EventEmitter();
  @Output() mapPlaces = new EventEmitter();
  @Output() sendCity = new EventEmitter();

  cityString: string | undefined;
  cityCordString: any;
  $city!: Subscription;
  newCity!: string;
  currentRoute!: string;
  citySelec!: string;

  constructor(public citiesServ: CitiesService, public currentCity: CurrentCityService, public rout: Router) {
  }
  ngOnInit(): void {
    this.currentRoute = this.prettyUrl(this.rout.url.slice(8));
    this.currentRoute = this.currentRoute.toLocaleLowerCase();

    if (this.currentCity.onlyCities.includes(this.currentRoute)) {
      this.currentCity.setCity(this.currentRoute);
      this.updateCity(this.currentRoute);
    }

    this.$city = this.currentCity.getCity().subscribe(val => {
      this.newCity = val.toLowerCase();
    })
    this.citySelec = this.capitalizeSent(this.newCity);
  }


  updateCity(name: string | undefined) {
    if (name != undefined || '') {
      this.citiesServ.getCityImg(name!)
      this.citiesServ.getCityCord(name!)
      this.citiesServ.getCityEvents(name!);
      this.currentCity.setCity(name!);
      this.rout.navigate([`nearby/${name?.toLowerCase()}`]);     /*Changes the routes based on drop down menu*/
    }
    else {
      console.log("Welcome to Peaks. Choose a city to start")
    }
  }

  capitalizeSent(phrase: string) {
    return phrase.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }


  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/%20/g, ' ')
    return childRoute
  }



  ngOnDestroy() {
    this.$city.unsubscribe();
  }

}




import { Component, Output, EventEmitter, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CitiesService } from '../../services/cities.service';
import { CurrentCityService } from '../../services/current-city.service';
import { Router } from '@angular/router';
import { MapViewService } from '../../services/map-view.service';
import { Cord } from '../../interfaces/cord';
import { Pins } from '../../interfaces/pins';


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
  @Output() mapName = new EventEmitter();
  @Output() iconColor = new EventEmitter();
  @Output() pin2 = new EventEmitter();

  $getCity!: Subscription;
  newCity!: string;
  currentRoute!: string;
  citySelec!: string;
  sendMap: any;

  constructor(public citiesServ: CitiesService, public currentCity: CurrentCityService, public mapViewServ: MapViewService, public rout: Router) { }

  ngOnInit(): void {
    this.currentRoute = this.prettyUrl(this.rout.url.slice(8));   /*currentRoute is used when someone navigates to the page without manually setting a city*/
    this.currentRoute = this.currentRoute.toLocaleLowerCase();    /*It will grab the url "nearby/{city}", slice it to get the city and lower case it*/

    if (this.currentCity.onlyCities.includes(this.currentRoute)) {    /*Then, the view is updated if the city is in our list*/
      this.currentCity.setCity(this.currentRoute);
      this.updateCity(this.currentRoute);
    }

    this.$getCity = this.currentCity.getCity().subscribe(val => {   /*!This sets the behaviorsubject within our app. It will be used once the app develops more*/
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
      this.rout.navigate([`nearby/${this.hyphen(name!.toLowerCase())}`]);     /*Changes the routes based on drop down menu*/
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


  hyphen(value: string): string {
    return value.replace(new RegExp(' ', 'g'), '-');
  }

  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/-/g, ' ')
    return childRoute
  }


  changeClicked(event: any) {
    this.mapViewServ.updateMap();
  }

  changeHome(cords: Cord<object>) {
    this.mapViewServ.homeCord = cords;
  }

  setDistance(pinInfo: Pins) {
    console.log(pinInfo);
    this.mapViewServ.secondPin = pinInfo;
  }



  ngOnDestroy() {
    this.$getCity.unsubscribe();
  }

}




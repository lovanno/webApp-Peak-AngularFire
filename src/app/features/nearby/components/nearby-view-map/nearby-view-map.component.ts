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
  @Output() mapCord = new EventEmitter();
  @Output() cityImg = new EventEmitter();
  @Output() cityCord = new EventEmitter();
  @Output() mapPlaces = new EventEmitter();
  @Output() sendCity = new EventEmitter();
  @Output() mapName = new EventEmitter();
  @Output() iconColor = new EventEmitter();
  @Output() sendHomeCord = new EventEmitter();
  @Output() pin2 = new EventEmitter();
  @Output() distanceFN = new EventEmitter();
  @Output() sendSecondPinCord = new EventEmitter();
  @Input() moveableHomePin!: boolean;

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

  pinMoved(newCord: any) {
    if (newCord.homePin && this.mapViewServ.homeCord) {
      this.mapViewServ.homeCord.long = this.mapViewServ.preciseRound(newCord.homePin[0], 2); /*To avoid having 12+ decimal points*/
      this.mapViewServ.homeCord.lat = this.mapViewServ.preciseRound(newCord.homePin[1], 2);
      this.updateDistanceUnit(this.mapViewServ.distanceUnit);
    }
    if (newCord.secondPin && this.mapViewServ.secondPin) {
      this.mapViewServ.secondPin.place = "";
      this.mapViewServ.secondPin.cord = [this.mapViewServ.preciseRound(newCord.secondPin[0], 2), this.mapViewServ.preciseRound(newCord.secondPin[1], 2)]; /*mixed order since lngLat exepects [long, lat]*/
      this.updateDistanceUnit(this.mapViewServ.distanceUnit);
    }

  }


  /*                                                             nearbyUpdateMap Comp                                       */
  changeClicked(event: any) {
    this.mapViewServ.updateMap();
  }


  /*                                                             nearbyHomepin Comp                                       */
  changeHome(cords: Cord<object>) {
    this.mapViewServ.homeCord = cords;
  }

  updateHomeDrag(status: boolean) {
    this.mapViewServ.homePinDrag = status;
  }


  /*                                                             nearbyDistancePins Comp                                       */
  setDistance(pinInfo: Pins) {
    this.mapViewServ.secondPin = pinInfo;
  }

  resetSelectPin(pin: any) {
    if (pin == this.mapViewServ.homeCord) {
      this.mapViewServ.homeCord = null;
    }
    if (pin == this.mapViewServ.secondPin) {
      this.mapViewServ.secondPin = null;
    }
  }

  /*Set timeout prevents ExpressionChangedAfterItHasBeenCheckedError: Previous value: 'undefined'. Current value: '21403.419'.. 
    This is because distanceofPin is always sent down through @Output distanceFN. It is intialized as undefined and once this function receieves unit, 
    distanceofPin is sent as undefined and updated at the same time. Instead, we through 2 checks w/ setTimeOut() and fix the issue */
  updateDistanceUnit(unit: string) {
    setTimeout(() => {
      if (unit == "M" && this.mapViewServ.secondPin && this.mapViewServ.homeCord) {
        this.mapViewServ.distanceofPin = this.mapViewServ.calculateDistance(this.mapViewServ.homeCord.long!, this.mapViewServ.homeCord.lat!, this.mapViewServ.secondPin.cord[0], this.mapViewServ.secondPin.cord[1]);
        this.mapViewServ.distanceofPin = this.mapViewServ.preciseRound((this.mapViewServ.distanceofPin / 1.609344), 3);
        this.mapViewServ.distanceUnit = unit;
      }

      if (unit == "KM" && this.mapViewServ.secondPin && this.mapViewServ.homeCord) {
        this.mapViewServ.distanceofPin = this.mapViewServ.calculateDistance(this.mapViewServ.homeCord.long!, this.mapViewServ.homeCord.lat!, this.mapViewServ.secondPin.cord[0], this.mapViewServ.secondPin.cord[1]);
        this.mapViewServ.distanceofPin = this.mapViewServ.preciseRound((this.mapViewServ.distanceofPin), 3);  /*since calcDistance() is always recalculated and gives its answer in KM, I don't have to adjust anything*/
        this.mapViewServ.distanceUnit = unit;
      }
    }, 1)
  }




  ngOnDestroy() {
    this.$getCity.unsubscribe();
  }

}




import { Injectable } from '@angular/core';
import { Cord } from '../interfaces/cord';
import { Pins } from '../interfaces/pins';

@Injectable({
  providedIn: 'root'
})
export class MapViewService {
  mapToggle = true;
  mapUrl!: string;
  mapStyle = "Night";
  homeCord!: Cord<number> | null;
  homePinDrag = false;
  secondPin!: Pins | null;
  secondPinDrag = false;
  distanceUnit!: string;  /*used when a pin is dragged and distanceofPin needs to be updated*/
  distanceofPin!: number | null;

  updateMap() {
    this.mapToggle = !this.mapToggle;
    if (this.mapToggle) {
      this.mapStyle = "Night";
      this.mapUrl = 'https://api.maptiler.com/maps/9534ef7d-c9d8-41b6-8955-46ef0283e901/style.json?key=FVjeFXupqnVfeknzKQkO'
    }
    else {
      this.mapStyle = "Morning";
      this.mapUrl = 'https://api.maptiler.com/maps/84dbf4ff-7486-49ff-8b92-e39bd56af895/style.json?key=FVjeFXupqnVfeknzKQkO';
    }
  }


  /*                                                             nearbyDistancePins Comp                                       */
  getDegree(num: number) {
    return num * Math.PI / 180
  }

  /*Conversion of Geek for Geeks' Javascript Formula*/
  calculateDistance(long1: number, lat1: number, long2: number, lat2: number) {
    long1 = this.getDegree(long1);
    lat1 = this.getDegree(lat1);
    long2 = this.getDegree(long2);
    lat2 = this.getDegree(lat2);

    /* Haversine formula */
    let distlon = long2 - long1;
    let distlat = lat2 - lat1;
    let a = Math.pow(Math.sin(distlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(distlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371; /*Radius of earth in kilometers. Use 3956 for miles*/
    return (c * r);
  }

  preciseRound(num: number, decimals: number) {
    let t = Math.pow(10, decimals);
    return parseFloat((Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals));
  }

}



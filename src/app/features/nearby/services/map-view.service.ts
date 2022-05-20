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
  homeCord!: Cord<number>;
  secondPin!: Pins;

  constructor() { }

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



  /*getDegree(num: number) {
    return num * Math.PI / 180
  }

  long1 = this.getDegree(long1);
  long2 = this.getDegree(long2);
  lat1 = this.getDegree(lat1);
  lat2 = this.getDegree(lat2);*/

  /*Conversion of Geek for Geeks' Javascript Formula*/
  calculateDistance(lat1: number, long1: number, lat2: number, long2: number) {
    long1 = long1 * Math.PI / 180;
    long2 = long2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    /* Haversine formula */
    let distlon = long2 - long1;
    let distlat = lat2 - lat1;
    let a = Math.pow(Math.sin(distlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(distlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));
    /*Radius of earth in kilometers. Use 3956 for miles*/
    let r = 6371;

    // calculate the result
    return (c * r);
  }




}



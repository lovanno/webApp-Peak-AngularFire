import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapViewService {
  mapToggle = true;
  mapUrl!: string;
  mapStyle = "Night";

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



}



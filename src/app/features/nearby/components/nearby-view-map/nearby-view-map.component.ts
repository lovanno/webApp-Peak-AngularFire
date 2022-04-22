import { Component, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../../services/cities.service';


@Component({
  selector: 'app-nearby-view-map',
  templateUrl: './nearby-view-map.component.html',
  styleUrls: ['./nearby-view-map.component.scss']
})
export class NearbyViewMapComponent {
  @Output() cityImg = new EventEmitter()
  @Output() cityCord = new EventEmitter()
  @Output() mapPlaces = new EventEmitter()

  cityString: string | undefined;
  cityCordString: any;

  constructor(public citiesServ: CitiesService) {
  }

  updateCity(name: string | undefined) {
    if (name != undefined || '') {
      this.citiesServ.getCityImg(name!)
      this.citiesServ.getCityCord(name!)
      this.citiesServ.getCityEvents(name!);
    }
    else {
      console.log("Welcome to Peaks. Choose a city to start")
    }
  }

}




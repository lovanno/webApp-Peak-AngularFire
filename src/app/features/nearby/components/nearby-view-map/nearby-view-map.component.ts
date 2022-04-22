import { Component, Input, OnInit, Output, EventEmitter, SimpleChange, ViewChild } from '@angular/core';
import { CitiesService } from '../../services/cities.service';


@Component({
  selector: 'app-nearby-view-map',
  templateUrl: './nearby-view-map.component.html',
  styleUrls: ['./nearby-view-map.component.scss']
})
export class NearbyViewMapComponent {
  public _apiResponse: any;

  /*@Input() sent: string | undefined;*/

  /* @Input() set sent(value: any) {
     if (value !== undefined || '') {
       this._apiResponse = value.toLowerCase();
       this.cityString = this.citiesServ.getImg(this._apiResponse)
     }
   }
   /* @Input() set appsID(id: number) {
      this.appURL = 'http://localhost:3333/application/item/' + id
      this.retreiveData();
    }
  
    @Input() set sent(value: any) {
      this._apiResponse = value;
      console.log(value);
      // do whatever else you want to do here
    }*/
  @Output() cityImg = new EventEmitter()
  @Output() cityCord = new EventEmitter()

  cityString: string | undefined;
  cityCordString: any;

  constructor(public citiesServ: CitiesService) {
  }

  works(name: string | undefined) {

    if (name != undefined || '') {
      this.citiesServ.getImg(name!)
      this.citiesServ.getCityCord(name!)
    }
  }


  ngOnChanges(changes: SimpleChange) {
    console.log(this.cityString)

    for (let cityString in changes) {
      console.log(cityString)
    }
  }


  /* Test2() {
   }*/




  /*getVar(city: string) {
    if (city) {
      console.log(city.toLowerCase());

      this.cityString = this.citiesServ.getImg(city.toLowerCase())
      console.log(this.cityString)

      this.cityCordString = this.citiesServ.getCityCord(city.toLowerCase());
      this.cityCordString = [this.cityCordString._long, this.cityCordString._lat]
    }
    else {
      this.cityString = ""        /*This value allows us to reset city if the user chooses no city
      this.cityCordString = [];
    }

    this.cityImg.emit(this.cityString)
    this.cityCord.emit(this.cityCordString)*/

}




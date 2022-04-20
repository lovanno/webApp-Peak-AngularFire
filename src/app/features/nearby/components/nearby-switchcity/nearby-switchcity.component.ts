import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MapMouseEvent } from 'maplibre-gl';
import { Observable } from 'rxjs';
import { ChoosenCity } from '../../interfaces/choosen-city';

@Component({
  selector: 'app-nearby-switchcity',
  templateUrl: './nearby-switchcity.component.html',
  styleUrls: ['./nearby-switchcity.component.scss']
})
export class NearbySwitchcityComponent implements OnInit {
  @Output() sendCity = new EventEmitter
  @Input() sendImg: string | undefined;
  public cityArr = ["Chicago", "San Francisco"];
  public center = [-74.50, 40];


  constructor() {
  }



  sendUp(city: string) {
    this.sendCity.emit(city)
  }




  ngOnInit(): void {
  }


}

import { Component, Input, OnInit } from '@angular/core';
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
  @Input() userList: any;

  public cityArr = ["Chicago", "San Francisco"];

  public center = [-74.50, 40];
  public testObs: any | undefined;


  constructor() {

  }





  center2 = [-74.50, 40] as maplibregl.LngLatLike




  ngOnInit(): void {
  }

}

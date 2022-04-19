import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MapMouseEvent } from 'maplibre-gl';
import { Observable, Subscription } from 'rxjs';

export interface Tester {
  imgUrl: string;
  center: any;
  name: string;
  address?: string;
}



@Component({
  selector: 'app-nearby-switchcity',
  templateUrl: './nearby-switchcity.component.html',
  styleUrls: ['./nearby-switchcity.component.scss']
})
export class NearbySwitchcityComponent implements OnInit {

  private ordersPath = '/locations';
  private ordersCollection: AngularFirestoreCollection<any>
  public ordersItems: Observable<Tester[]>;
  public currentCity: string | undefined;
  public imageHa: string | undefined;
  public coordinates2: number | undefined;

  public imageSan: string | undefined;
  public coordinatesSan: number | undefined;

  public cityArr = ["Chicago", "San Francisco"];

  public center = [-74.50, 40];
  public testObs: any | undefined;


  constructor(private readonly afs: AngularFirestore) {
    this.ordersCollection = afs.collection<any>(this.ordersPath);
    this.ordersItems = this.ordersCollection.valueChanges();
  }


  centerMapTo(evt: MapMouseEvent) {
    this.center = [-20.96, -10];
  }


  center2 = [-74.50, 40] as maplibregl.LngLatLike


  selectionChange(value: string) {
    this.currentCity = value;
    this.ordersCollection.doc(value.toLowerCase()).get().subscribe(f => {
      this.imageSan = f.data().imgUrl;
      this.coordinatesSan = f.data().center.latitude;

      this.center2 = [f.data().center.longitude, f.data().center.latitude]
    })



    this.ordersCollection.doc(value.toLowerCase()).collection("places").doc("whiskey business").get().subscribe(h => this.testObs = h.data()?.['rating'])


  }


  getOrder(id: string) {
    return this.ordersCollection.doc(id).valueChanges();
  }


  ngOnInit(): void {
  }

}

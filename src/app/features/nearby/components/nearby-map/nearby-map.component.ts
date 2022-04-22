import { Component, Input, OnInit } from '@angular/core';
import { MapMouseEvent } from 'maplibre-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nearby-map',
  templateUrl: './nearby-map.component.html',
  styleUrls: ['./nearby-map.component.scss']
})
export class NearbyMapComponent implements OnInit {
  @Input() mapCord: any;  /*Dynamic value that updates map when parent notifies it to*/
  @Input() mapPlaces: any;

  constructor() { }


  alert(item: string): any {
    console.log(item);
  }

  /*The following can be used to toggle custom map looks in future*/
  mapStyle: string = 'mapbox://styles/elpierrot/ckl0qlk1q0skq17s0x0hhjli3';
  layerPaint = {
    'circle-radius': 10,
    'circle-color': '#3887be',
  };
  coordinates = [0, 0];

  changeColor(color: string) {
    this.layerPaint = { ...this.layerPaint, 'circle-color': color };
  }

  /*Marker Events*/
  /*onDragStart(event: MapMouseEvent) {
    console.log('onDragStart', event);
  }

  onDragEnd(event: MapMouseEvent) {
    console.log('onDragEnd', event);
    console.log('onDrag', event);

    (featureDragStart)="onDragStart($event)"
    (featureDragEnd)="onDragEnd($event)"
  }*/

  onDrag(event: MapMouseEvent) {
    this.coordinates = event.lngLat.toArray();
  }

  ngOnInit(): void {
  }


}

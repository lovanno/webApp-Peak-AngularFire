import { Component, OnInit } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import { MapMouseEvent } from 'maplibre-gl';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-nearby-map',
  templateUrl: './nearby-map.component.html',
  styleUrls: ['./nearby-map.component.scss']
})
export class NearbyMapComponent implements OnInit {



  constructor() {


  }




  center2 = [-74.50, 40] as maplibregl.LngLatLike





  title = 'peaks';
  token1 = environment.mapboxTok;
  mapStyle: string = 'mapbox://styles/elpierrot/ckl0qlk1q0skq17s0x0hhjli3';


  alert(item: string): any {
    console.log(item);
  }


  layerPaint = {
    'circle-radius': 10,
    'circle-color': '#3887be',
  };

  coordinates = [0, 0];

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

  changeColor(color: string) {
    this.layerPaint = { ...this.layerPaint, 'circle-color': color };
  }



  ngOnInit(): void {
  }

}

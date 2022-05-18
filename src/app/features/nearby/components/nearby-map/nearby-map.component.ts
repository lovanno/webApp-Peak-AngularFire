import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MapMouseEvent } from 'maplibre-gl';

@Component({
  selector: 'app-nearby-map',
  templateUrl: './nearby-map.component.html',
  styleUrls: ['./nearby-map.component.scss']
})
export class NearbyMapComponent {
  @Input() mapCord: any;  /*Dynamic value that updates map when parent notifies it to*/
  @Input() mapPlaces: any;
  @Input() sendCity: any;
  public count!: number;
  public track = true;

  constructor(private ref: ChangeDetectorRef) { }

  closeAllEvents() {
    for (let i = 0; i < this.mapPlaces.length; i++) {
      this.mapPlaces[i].toggle = false
    }
  }

  openEvent(item: number): any {
    if (this.track == true) {
      this.mapPlaces[item].toggle = !this.mapPlaces[item].toggle;
      this.track = false;
    }
    else {
      this.track = true;
      this.closeAllEvents()
      this.mapPlaces[item].toggle = false;
    }

    if (this.count !== item) {
      this.closeAllEvents()
      this.mapPlaces[item].toggle = true;
    }

    this.count = item;
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


  onDrag(event: MapMouseEvent) {
    this.coordinates = event.lngLat.toArray();
  }


  ngAfterContentChecked() {
    this.ref.detectChanges();     /*prevents ExpressionChangedAfterItHasBeenCheckedError*/
  }

}

import { ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LngLat, MapMouseEvent, Marker } from 'maplibre-gl';
import { Cord } from '../../interfaces/cord';
import { Pins } from '../../interfaces/pins';

@Component({
  selector: 'app-nearby-map',
  templateUrl: './nearby-map.component.html',
  styleUrls: ['./nearby-map.component.scss']
})
export class NearbyMapComponent implements OnInit {
  @Input() mapCord: any;  /*Dynamic value that updates map when parent notifies it to*/
  @Input() mapPlaces: any;
  @Input() sendCity: any;
  @Input() mapStyle!: string;
  @Input() iconColor!: string;
  @Input() sendHomeCord!: Cord<number>;
  @Input() sendSecondPinCord!: Pins;
  @Input() makeHomePinDrag!: boolean;
  @Output() updateDistance = new EventEmitter<any>();
  @Output() updateHomePin = new EventEmitter<any>();
  @Output() updateSecondPin = new EventEmitter<any>();

  public count!: number;
  public track = true;

  constructor(private ref: ChangeDetectorRef) { }
  ngOnInit() {
    this.mapStyle = 'https://api.maptiler.com/maps/9534ef7d-c9d8-41b6-8955-46ef0283e901/style.json?key=FVjeFXupqnVfeknzKQkO'; /*sets inital state to night mode. Then the value is updated dynamically through the mapStyle input*/
  }

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

  onDragEnd(marker: Marker) {
    this.coordinates = marker.getLngLat().toArray();

    this.checkPinCord(marker);
  }

  checkPinCord(marker: any) {
    if (marker._element.firstElementChild!.id == "homePin") {
      const homePin = { homePin: [marker._lngLat.lng, marker._lngLat.lat] };  /*naming it allows specific pin update*/
      this.updateHomePin.emit(homePin);
    }
    else if (marker._element.firstElementChild!.id == "secondPin") {
      const secondPin = { secondPin: [marker._lngLat.lng, marker._lngLat.lat] };
      this.updateHomePin.emit(secondPin);
    }
  }

  sendPin(place: string, cord: LngLat[]) {
    this.updateDistance.emit({ place, cord });
  }


  ngAfterContentChecked() {
    this.ref.detectChanges();     /*prevents ExpressionChangedAfterItHasBeenCheckedError*/
  }

}

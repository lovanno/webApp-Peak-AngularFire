import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Pins } from '../../interfaces/pins';
import { Cord } from '../../interfaces/cord';

@Component({
  selector: 'app-nearby-distance-pins',
  templateUrl: './nearby-distance-pins.component.html',
  styleUrls: ['./nearby-distance-pins.component.scss']
})
export class NearbyDistancePinsComponent implements OnChanges {
  @Input() pin2!: Pins;
  @Input() sendHomeCord!: Cord<number>;
  @Input() distanceFN!: Function;
  public distanceNum!: number;

  constructor() { }

  ngOnChanges() {
    if (this.pin2 && this.sendHomeCord) {
      this.distanceNum = this.distanceFN(this.sendHomeCord.lat, this.sendHomeCord.long, this.pin2.cord[0], this.pin2.cord[1]);
    }
  }

}
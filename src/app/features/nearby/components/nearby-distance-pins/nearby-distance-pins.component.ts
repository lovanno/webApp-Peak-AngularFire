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
  public distUnit = "KM";
  public unitToggle = false;

  constructor() { }

  ngOnChanges() {
    if (this.pin2 && this.sendHomeCord) {
      this.distanceNum = this.distanceFN(this.sendHomeCord.lat, this.sendHomeCord.long, this.pin2.cord[0], this.pin2.cord[1]);
      this.distanceNum = this.preciseRound(this.distanceNum, 3);
    }
  }

  preciseRound(num: number, decimals: number) {
    let t = Math.pow(10, decimals);
    return parseFloat((Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals));
  }

  toggleMeters() {
    this.unitToggle = !this.unitToggle;
    if (this.unitToggle) {
      this.distUnit = "M";
      this.distanceNum = this.preciseRound((this.distanceNum / 1.609344), 3);
    }
    else {
      this.distUnit = "KM";
      this.distanceNum = this.preciseRound((this.distanceNum * 1.609344), 3);
    }

  }

}
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';
import { Pins } from '../../interfaces/pins';
import { Cord } from '../../interfaces/cord';

@Component({
  selector: 'app-nearby-distance-pins',
  templateUrl: './nearby-distance-pins.component.html',
  styleUrls: ['./nearby-distance-pins.component.scss']
})
export class NearbyDistancePinsComponent implements OnChanges {
  /*null type allows me to reset the pin. Although Undefined works, null signifies empty/nothing while undefined is a variable declared that was given no value at run time. */
  @Input() pin2!: Pins | null;
  @Input() sendHomeCord!: Cord<number> | null;
  @Input() distanceNum!: number | null;

  @Output() resetPins = new EventEmitter();
  @Output() toggleUnit = new EventEmitter();
  public distUnit = "KM";
  public distUnit2 = "M"; /*a second variable is required to allow users to switch to a different unit*/
  public unitToggle = false;

  constructor() { }
  ngOnChanges() {
    if (this.pin2 && this.sendHomeCord) {
      this.toggleUnit.emit(this.distUnit);    /*once 2 pins are set, we request the distance between the pins to nearbyViewMap through updateDistanceUnit. It's then sent down via @Input() distanceNum*/
    }
  }


  toggleMeters() {
    this.unitToggle = !this.unitToggle;
    if (this.unitToggle && this.distanceNum) {
      this.distUnit = "M";
      this.distUnit2 = "KM";
      this.toggleUnit.emit(this.distUnit);
    }
    else if (this.distanceNum) {
      this.distUnit = "KM";
      this.distUnit2 = "M";
      this.toggleUnit.emit(this.distUnit);
    }
  }


  /*While it seems redundant, this seperates logic from child and allows nearby-view-map to handle it*/
  resetPin(pinNum: Pins | Cord<number>) {
    if (pinNum == this.sendHomeCord) {
      this.resetPins.emit(this.sendHomeCord);
    }
    if (this.pin2 == pinNum) {
      this.resetPins.emit(this.pin2);
    }
    this.distanceNum = null;
  }

}
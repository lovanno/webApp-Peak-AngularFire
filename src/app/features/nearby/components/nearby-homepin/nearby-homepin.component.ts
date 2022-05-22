import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cord } from '../../interfaces/cord';


@Component({
  selector: 'app-nearby-homepin',
  templateUrl: './nearby-homepin.component.html',
  styleUrls: ['./nearby-homepin.component.sass']
})
export class NearbyHomepinComponent {
  @Input() sendHomeCord!: any;
  @Output() setCords = new EventEmitter();
  @Output() moveableHomePin = new EventEmitter();
  public homePinDrag = false;
  public homePinDragStatus = "Drag";

  constructor() { }

  sendCord(cordPair: Cord<object>) {
    this.setCords.emit(cordPair);
  }

  homeDraggable() {
    this.homePinDrag = !this.homePinDrag;
    this.moveableHomePin.emit(this.homePinDrag);

    if (this.homePinDrag) {
      this.homePinDragStatus = "Stop Moving Marker";
    }
    else {
      this.homePinDragStatus = "Drag Marker";
    }
  }

}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cord } from '../../interfaces/cord';


@Component({
  selector: 'app-nearby-homepin',
  templateUrl: './nearby-homepin.component.html',
  styleUrls: ['./nearby-homepin.component.sass']
})
export class NearbyHomepinComponent {
  @Output() setCords = new EventEmitter();
  @Input() sendHomeCord!: any;
  constructor() { }

  sendCord(cordPair: Cord<object>) {
    this.setCords.emit(cordPair);
  }

}

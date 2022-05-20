import { Component, Input } from '@angular/core';
import { Pins } from '../../interfaces/pins';
import { Cord } from '../../interfaces/cord';

@Component({
  selector: 'app-nearby-distance-pins',
  templateUrl: './nearby-distance-pins.component.html',
  styleUrls: ['./nearby-distance-pins.component.scss']
})
export class NearbyDistancePinsComponent {
  @Input() pin2!: Pins;
  @Input() sendHomeCord!: Cord<number>;

  constructor() { }

}

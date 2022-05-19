import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nearby-update-map',
  templateUrl: './nearby-update-map.component.html',
  styleUrls: ['./nearby-update-map.component.scss']
})
export class NearbyUpdateMapComponent {
  @Output() ChangeMap = new EventEmitter();
  @Input() mapName: any;

  constructor() { }

  notifyMap() {
    this.ChangeMap.emit();
  }

}

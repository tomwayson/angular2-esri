import { Component } from 'angular2/core';
import { MapComponent } from './map.component';

@Component({
  directives: [MapComponent],
    selector: 'my-app',
    template:
    `
    <div>
    <esri-map #mapDirective (mapLoaded)="onMapLoad(mapDirective.map)">
    </esri-map>
    </div>
    `
})
export class AppComponent { 
  onMapLoad(map) {
    console.log('map loaded:', map);
  }
}
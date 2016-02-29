import { Component } from 'angular2/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';

@Component({
  directives: [MapComponent, SearchComponent],
    selector: 'my-app',
    template:
    `
    <esri-map #mapComponent (mapLoaded)="searchComponent.setMap(mapComponent.map)">
      <esri-search #searchComponent></esri-search>
    </esri-map>
    `
})
export class AppComponent { 
}
import { Component } from 'angular2/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';

@Component({
  directives: [MapComponent, SearchComponent],
    selector: 'my-app',
    template:
    `
    <esri-map #mapComponent [options]="mapOptions" (mapLoaded)="searchComponent.setMap(mapComponent.map)">
      <esri-search [options]="searchOptions" #searchComponent></esri-search>
    </esri-map>
    `
})
export class AppComponent { 
  public mapOptions = {
    basemap: "gray",
    center: [-97, 38], // lon, lat
    zoom: 5
  };
  
  public searchOptions = {
    enableButtonMode: true, //this enables the search widget to display as a single button
    enableLabel: false,
    enableInfoWindow: true,
    showInfoWindowOnSelect: false,
  };
}
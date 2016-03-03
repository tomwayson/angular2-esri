import { Component } from 'angular2/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';

@Component({
  directives: [MapComponent, SearchComponent, LegendComponent],
    selector: 'my-app',
    template:
    `
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8 col-md-9 col-lg-10 map-col">
          <esri-map #mapComponent [options]="mapOptions" (mapLoaded)="searchComponent.setMap(mapComponent.map);legendComponent.setMap(mapComponent.map);">
            <esri-search [options]="searchOptions" #searchComponent></esri-search>
          </esri-map>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <esri-legend #legendComponent></esri-legend>
        </div>
      </div>
    </div>
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
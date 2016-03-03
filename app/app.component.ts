import { Component, ViewChild } from 'angular2/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';

@Component({
  directives: [MapComponent, SearchComponent, LegendComponent],
    selector: 'my-app',
    template:
    `
    <div class="row">
      <div class="col-sm-8 col-md-9 col-lg-10 map-col">
        <esri-map #mapComponent [itemId]="itemId" [options]="mapOptions" (mapLoaded)="onMapLoad(mapComponent.response)">
          <esri-search [options]="searchOptions"></esri-search>
        </esri-map>
      </div>
      <div class="col-sm-4 col-md-3 col-lg-2">
        <h3>{{title}}</h3>
        <esri-legend></esri-legend>
      </div>
    </div>
    `
})
export class AppComponent {

  // references to child components
  @ViewChild(SearchComponent) searchComponent:SearchComponent;
  @ViewChild(LegendComponent) legendComponent:LegendComponent;

  title = 'Map Title';

  // map config
  itemId = '8e42e164d4174da09f61fe0d3f206641';
  public mapOptions = {
    basemap: "gray",
    center: [-97, 38], // lon, lat
    zoom: 5
  };

  // search config
  public searchOptions = {
    enableButtonMode: true, //this enables the search widget to display as a single button
    enableLabel: false,
    enableInfoWindow: true,
    showInfoWindowOnSelect: false,
  };

  // once the map loads
  onMapLoad(response) {
    // bind the search dijit to the map
    this.searchComponent.setMap(response.map);
    // initialize the leged dijit with map and layer infos
    this.legendComponent.init(response.map, response.layerInfos);
    // bind the map title
    this.title = response.itemInfo.item.title;
  }
}
import { Component, ViewChild } from '@angular/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';
import { BasemapSelect } from './basemapselect.component';
import { LayerComponent } from './layer.component';
import {Tab} from './tab.component';
import {Tabs} from './tabs.component';
@Component({
  directives: [MapComponent, SearchComponent, LegendComponent, BasemapSelect, LayerComponent, Tab, Tabs],
    selector: 'my-app',
    template:
    `
    <div class="row">
      <div class="col-sm-12 map-col">
        <tabs>
          <h2 style="margin: 0 10px">{{title}}</h2>
          <tab [tabTitle]="'Map'">
              <esri-map [itemId]="itemId" [options]="mapOptions" (mapLoaded)="onMapLoad($event)">
                  <esri-search [options]="searchOptions"></esri-search>
              </esri-map>
          </tab>
          <tab tabTitle="Layers and Legend">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                    <div class="row">
                        <div class="col-xs-4 col-xs-offset-1">
                            <h4>Layer Visibility</h4>
                            <esri-layer></esri-layer>
                        </div>
                        <div class="col-xs-4 col-xs-offset-1">
                            <h4>Legend</h4>
                            <esri-legend></esri-legend>
                        </div>
                    </div>
                </div>
            </div>
          </tab>
          <tab tabTitle="Basemap">
              <div class="col-sm-8 col-sm-offset-2">
                  <div class="row">
                      <div class="col-xs-4 col-xs-offset-4">
                          <h4>Basemap</h4>
                          <div>
                            <basemap-select (basemapSelected)="onBasemapSelected($event)"></basemap-select>
                          </div>
                      </div>
                  </div>
              </div>
            </tab>
        </tabs> 
      </div>
    </div>
    `
})
export class AppComponent {

  // references to child components
  @ViewChild(MapComponent) mapComponent:MapComponent;
  @ViewChild(SearchComponent) searchComponent:SearchComponent;
  @ViewChild(LegendComponent) legendComponent:LegendComponent;
  @ViewChild(BasemapSelect) basemapSelect:BasemapSelect;
  @ViewChild(LayerComponent) LayerComponent:LayerComponent;

  title = 'Map Title';

  // map config
  itemId = '8e42e164d4174da09f61fe0d3f206641';
  public mapOptions = {
    basemap: 'gray',
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
    const map = response.map;

    // bind the search dijit to the map
    this.searchComponent.setMap(map);
    // initialize the leged dijit with map and layer infos
    this.legendComponent.init(map, response.layerInfos);
    // set the selected basemap
    this.basemapSelect.selectedBasemap = response.basemapName;
    // bind the map title
    this.title = response.itemInfo.item.title;
    //bind the legendlayer
    this.LayerComponent.init(response);
  }

  // set map's basemap in response to user changes
  onBasemapSelected(basemapName) {
    this.mapComponent.setBasemap(basemapName);
  }
}

import { Injectable } from '@angular/core';
import { arcgisUtils, esriBasemaps, Legend, Search } from 'esri';

@Injectable()
export class MapService {
  _basemaps: any[];

  // load a web map and return response
  createMap(itemIdOrInfo: any, domNodeOrId: any, options: Object) {
    return arcgisUtils.createMap(itemIdOrInfo, domNodeOrId, options).then(response => {
      // append layer infos and basemap name to response before returning
      response.layerInfos = arcgisUtils.getLegendLayers(response);
      response.basemapName = this.getBasemapName(response.map);
      return response;
    });
  };

  // create a search dijit at the dom node
  createSearch(options: Object, domNodeOrId: any) {
    return new Search(options, domNodeOrId);
  };

  // create a legend dijit at the dom node
  createLegend(options: Object, domNodeOrId: any) {
    return new Legend(options, domNodeOrId);
  };

  // get esriBasemaps as array of basemap defintion objects
  getBasemaps() {
    if (!this._basemaps) {
      this._basemaps = Object.keys(esriBasemaps).map((name) => {
        let basemap = esriBasemaps[name];
        basemap.name = name;
        return basemap;
      });
    }
    return this._basemaps;
  }

  // get the name of basemap layer
  getBasemapName(map) {
    let basemapName = map.getBasemap();
    if (basemapName) {
      return basemapName;
    }
    // loop through map layers
    map.layerIds.some(layerId => {
      const layerUrl = map.getLayer(layerId).url;
      // loop through known basemap definitions
      return this.getBasemaps().some(basemapDef => {
        // loop through layers in basemap definition (isn't this fun?)
        return basemapDef.baseMapLayers.some(basemapDefLayer => {
          const match = basemapDefLayer.url.toLowerCase() === layerUrl.toLowerCase();
          if (match) {
            basemapName = basemapDef.name;
          }
          return match;
        });
      });
    });
    return basemapName;
  }

  // try to remove basemap layers from map
  // if not defined, then remove the first layer
  clearBasemap(map) {
    if (map.basemapLayerIds && map.basemapLayerIds.length > 0) {
      map.basemapLayerIds.forEach(function(lid) {
        map.removeLayer(map.getLayer(lid));
      });
      map.basemapLayerIds = [];
    } else {
      map.removeLayer(map.getLayer(map.layerIds[0]));
    }
  }
  //change the selected layer visibility
  selectLayer(response, selectedLayer){ 
    response.layerInfos.forEach(layerId =>{
      if (selectedLayer.name===layerId.title)
      layerId.layer.setVisibility(!selectedLayer.checked);
    });
  }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', 'esri'], function (require, exports, core_1, esri_1) {
    "use strict";
    var MapService = (function () {
        function MapService() {
        }
        // load a web map and return response
        MapService.prototype.createMap = function (itemIdOrInfo, domNodeOrId, options) {
            var _this = this;
            return esri_1.arcgisUtils.createMap(itemIdOrInfo, domNodeOrId, options).then(function (response) {
                // append layer infos and basemap name to response before returning
                response.layerInfos = esri_1.arcgisUtils.getLegendLayers(response);
                response.basemapName = _this.getBasemapName(response.map);
                return response;
            });
        };
        ;
        // create a search dijit at the dom node
        MapService.prototype.createSearch = function (options, domNodeOrId) {
            return new esri_1.Search(options, domNodeOrId);
        };
        ;
        // create a legend dijit at the dom node
        MapService.prototype.createLegend = function (options, domNodeOrId) {
            return new esri_1.Legend(options, domNodeOrId);
        };
        ;
        // get esriBasemaps as array of basemap defintion objects
        MapService.prototype.getBasemaps = function () {
            if (!this._basemaps) {
                this._basemaps = Object.keys(esri_1.esriBasemaps).map(function (name) {
                    var basemap = esri_1.esriBasemaps[name];
                    basemap.name = name;
                    return basemap;
                });
            }
            return this._basemaps;
        };
        // get the name of basemap layer
        MapService.prototype.getBasemapName = function (map) {
            var _this = this;
            var basemapName = map.getBasemap();
            if (basemapName) {
                return basemapName;
            }
            // loop through map layers
            map.layerIds.some(function (layerId) {
                var layerUrl = map.getLayer(layerId).url;
                // loop through known basemap definitions
                return _this.getBasemaps().some(function (basemapDef) {
                    // loop through layers in basemap definition (isn't this fun?)
                    return basemapDef.baseMapLayers.some(function (basemapDefLayer) {
                        var match = basemapDefLayer.url.toLowerCase() === layerUrl.toLowerCase();
                        if (match) {
                            basemapName = basemapDef.name;
                        }
                        return match;
                    });
                });
            });
            return basemapName;
        };
        // try to remove basemap layers from map
        // if not defined, then remove the first layer
        MapService.prototype.clearBasemap = function (map) {
            if (map.basemapLayerIds && map.basemapLayerIds.length > 0) {
                map.basemapLayerIds.forEach(function (lid) {
                    map.removeLayer(map.getLayer(lid));
                });
                map.basemapLayerIds = [];
            }
            else {
                map.removeLayer(map.getLayer(map.layerIds[0]));
            }
        };
        MapService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], MapService);
        return MapService;
    }());
    exports.MapService = MapService;
});
//# sourceMappingURL=map.service.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', './map.component', './search.component', './legend.component', './basemapselect.component'], function (require, exports, core_1, map_component_1, search_component_1, legend_component_1, basemapselect_component_1) {
    "use strict";
    var AppComponent = (function () {
        function AppComponent() {
            this.title = 'Map Title';
            // map config
            this.itemId = '8e42e164d4174da09f61fe0d3f206641';
            this.mapOptions = {
                basemap: "gray",
                center: [-97, 38],
                zoom: 5
            };
            // search config
            this.searchOptions = {
                enableButtonMode: true,
                enableLabel: false,
                enableInfoWindow: true,
                showInfoWindowOnSelect: false,
            };
        }
        // once the map loads
        AppComponent.prototype.onMapLoad = function (response) {
            var map = response.map;
            // bind the search dijit to the map
            this.searchComponent.setMap(map);
            // initialize the leged dijit with map and layer infos
            this.legendComponent.init(map, response.layerInfos);
            // set the selected basemap
            this.basemapSelect.selectedBasemap = response.basemapName;
            // bind the map title
            this.title = response.itemInfo.item.title;
        };
        // set map's basemap in response to user changes
        AppComponent.prototype.onBasemapSelected = function (basemapName) {
            this.mapComponent.setBasemap(basemapName);
        };
        __decorate([
            core_1.ViewChild(map_component_1.MapComponent), 
            __metadata('design:type', map_component_1.MapComponent)
        ], AppComponent.prototype, "mapComponent", void 0);
        __decorate([
            core_1.ViewChild(search_component_1.SearchComponent), 
            __metadata('design:type', search_component_1.SearchComponent)
        ], AppComponent.prototype, "searchComponent", void 0);
        __decorate([
            core_1.ViewChild(legend_component_1.LegendComponent), 
            __metadata('design:type', legend_component_1.LegendComponent)
        ], AppComponent.prototype, "legendComponent", void 0);
        __decorate([
            core_1.ViewChild(basemapselect_component_1.BasemapSelect), 
            __metadata('design:type', basemapselect_component_1.BasemapSelect)
        ], AppComponent.prototype, "basemapSelect", void 0);
        AppComponent = __decorate([
            core_1.Component({
                directives: [map_component_1.MapComponent, search_component_1.SearchComponent, legend_component_1.LegendComponent, basemapselect_component_1.BasemapSelect],
                selector: 'my-app',
                template: "\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-md-9 col-lg-10 map-col\">\n        <esri-map [itemId]=\"itemId\" [options]=\"mapOptions\" (mapLoaded)=\"onMapLoad($event)\">\n          <esri-search [options]=\"searchOptions\"></esri-search>\n        </esri-map>\n      </div>\n      <div class=\"col-sm-4 col-md-3 col-lg-2\">\n        <h3>{{title}}</h3>\n        <esri-legend></esri-legend>\n        <h4>Basemap</h4>\n        <div>\n          <basemap-select (basemapSelected)=\"onBasemapSelected($event)\"></basemap-select>\n        </div>\n      </div>\n    </div>\n    "
            }), 
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map
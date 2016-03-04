var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', './map.service'], function (require, exports, core_1, map_service_1) {
    "use strict";
    var MapComponent = (function () {
        function MapComponent(elRef, _mapService) {
            this.elRef = elRef;
            this._mapService = _mapService;
            this.mapLoaded = new core_1.EventEmitter();
        }
        MapComponent.prototype.ngOnInit = function () {
            var _this = this;
            // create the map
            this._mapService.createMap(this.itemId, this.elRef.nativeElement.firstChild, this.options).then(function (response) {
                // get a reference to teh map and expose response to app
                _this.map = response.map;
                _this.mapLoaded.next(response);
            });
        };
        MapComponent.prototype.setBasemap = function (basemapName) {
            this._mapService.clearBasemap(this.map);
            this.map.setBasemap(basemapName);
        };
        // destroy map
        MapComponent.prototype.ngOnDestroy = function () {
            if (this.map) {
                this.map.destroy();
            }
        };
        __decorate([
            core_1.Output(), 
            __metadata('design:type', Object)
        ], MapComponent.prototype, "mapLoaded", void 0);
        MapComponent = __decorate([
            core_1.Component({
                selector: 'esri-map',
                template: '<div><ng-content></ng-content></div>',
                providers: [map_service_1.MapService],
                inputs: ['options', 'itemId']
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
        ], MapComponent);
        return MapComponent;
    }());
    exports.MapComponent = MapComponent;
});
//# sourceMappingURL=map.component.js.map
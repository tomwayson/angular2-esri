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
    var SearchComponent = (function () {
        function SearchComponent(elRef, _mapService) {
            this.elRef = elRef;
            this._mapService = _mapService;
        }
        // create the search dijit
        SearchComponent.prototype.ngOnInit = function () {
            this.search = this._mapService.createSearch(this.options, this.elRef.nativeElement.firstChild);
        };
        // start up once the DOM is ready
        SearchComponent.prototype.ngAfterViewInit = function () {
            this.search.startup();
        };
        // bind search dijit to map
        SearchComponent.prototype.setMap = function (map) {
            this.search.set('map', map);
        };
        // destroy search dijit
        SearchComponent.prototype.ngOnDestroy = function () {
            if (this.search) {
                this.search.destroy();
            }
        };
        SearchComponent = __decorate([
            core_1.Component({
                selector: 'esri-search',
                template: '<div></div>',
                providers: [map_service_1.MapService],
                inputs: ['options']
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
        ], SearchComponent);
        return SearchComponent;
    }());
    exports.SearchComponent = SearchComponent;
});
//# sourceMappingURL=search.component.js.map
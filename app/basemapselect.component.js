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
    var BasemapSelect = (function () {
        function BasemapSelect(elRef, _mapService) {
            this.elRef = elRef;
            this._mapService = _mapService;
            this.selectedBasemap = '';
            this.basemapSelected = new core_1.EventEmitter();
        }
        // populate select from available basemap definitions
        BasemapSelect.prototype.ngOnInit = function () {
            this.basemaps = this._mapService.getBasemaps();
        };
        // notify app when user selects a different basemap
        BasemapSelect.prototype.onSelectChange = function (e) {
            this.basemapSelected.next(e.target.value);
        };
        __decorate([
            core_1.Output(), 
            __metadata('design:type', Object)
        ], BasemapSelect.prototype, "basemapSelected", void 0);
        BasemapSelect = __decorate([
            core_1.Component({
                selector: 'basemap-select',
                template: "<select [ngModel]=\"selectedBasemap\" (change)=\"onSelectChange($event)\" class=\"form-control\">\n    <option *ngFor=\"#basemap of basemaps\" value=\"{{basemap.name}}\">{{basemap.title}}</option>\n  </select>",
                providers: [map_service_1.MapService]
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
        ], BasemapSelect);
        return BasemapSelect;
    }());
    exports.BasemapSelect = BasemapSelect;
});
//# sourceMappingURL=basemapselect.component.js.map
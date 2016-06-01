import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'esri-map',
  template: '<div><ng-content></ng-content></div>',
  providers: [MapService],
  inputs: ['options', 'itemId']
})
export class MapComponent {

  @Output() mapLoaded = new EventEmitter();

  map: any;
  options: Object;
  itemId: string;

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  ngOnInit() {
    // create the map
    this._mapService.createMap(this.itemId, this.elRef.nativeElement.firstChild, this.options).then((response) => {
      // get a reference to teh map and expose response to app
      this.map = response.map;
      this.mapLoaded.next(response);
    });
  }

  setBasemap(basemapName) {
    this._mapService.clearBasemap(this.map);
    this.map.setBasemap(basemapName);
  }

  // destroy map
  ngOnDestroy() {
    if (this.map) {
      this.map.destroy();
    }
  }
}

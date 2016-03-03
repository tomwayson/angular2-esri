import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';

@Component({
  selector: 'esri-map',
  template: '<div><ng-content></ng-content></div>',
  providers: [MapService],
  inputs: ['options', 'itemId']
})
export class MapComponent {

  @Output() mapLoaded = new EventEmitter();

  response: any;
  options: Object;
  itemId: string;

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  ngOnInit() {
    // create the map
    this._mapService.createMap(this.itemId, this.elRef.nativeElement.firstChild, this.options).then((response) => {
      // make response available to app
      // and emit map loaded event
      this.response = response;
      this.mapLoaded.next(response);
    });
  }
}

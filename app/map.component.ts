import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';

@Component({
  selector: 'esri-map',
  template: '<div><ng-content></ng-content></div>',
  providers: [MapService],
  inputs: ['options']
})
export class MapComponent {

  @Output() mapLoaded = new EventEmitter();
  
  map: any;
  
  options: Object;
  
  constructor(private elRef:ElementRef, private _mapService:MapService) {}
  
  ngOnInit() {
    // create the map
    this.map = this._mapService.createMap(this.elRef.nativeElement.firstChild, this.options);
    
    // emit map loaded event once loaded
    this.map.on('load', () => {
      this.mapLoaded.next(this.map);      
    });
  }
}

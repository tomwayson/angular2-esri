import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';

@Component({
  selector: 'esri-legend',
  template: '<div></div>',
  providers: [MapService]
})
export class LegendComponent {

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  legend: any;
  
  setMap(map) {
    this.legend = this._mapService.createLegend({map}, this.elRef.nativeElement.firstChild);
    this.legend.startup();    
  }
}

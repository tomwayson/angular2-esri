import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';


@Component({
  selector: 'esri-search',
  template: '<div></div>',
  providers: [MapService],
  inputs: ['options']
})
export class SearchComponent {

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  search: any;

  options: Object;
  
  ngOnInit() {
    this.search = this._mapService.createSearch(this.options, this.elRef.nativeElement.firstChild);      
  }

  setMap(map) {
    this.search.set('map', map);
  }
}

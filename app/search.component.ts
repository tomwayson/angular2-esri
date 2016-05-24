import { Component, ElementRef } from '@angular/core';
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

  // create the search dijit
  ngOnInit() {
    this.search = this._mapService.createSearch(this.options, this.elRef.nativeElement.firstChild);
  }

  // start up once the DOM is ready
  ngAfterViewInit() {
    this.search.startup();
  }

  // bind search dijit to map
  setMap(map) {
    this.search.set('map', map);
  }

  // destroy search dijit
  ngOnDestroy() {
    if (this.search) {
      this.search.destroy();
    }
  }
}

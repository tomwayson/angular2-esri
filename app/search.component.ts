import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { Search } from 'esri';

@Component({
  selector: 'esri-search',
  template: '<div></div>'
})
export class SearchComponent {

  constructor(private elRef:ElementRef) {}

  ngOnInit() {
    this.search = new Search({
      enableButtonMode: true, //this enables the search widget to display as a single button
      enableLabel: false,
      enableInfoWindow: true,
      showInfoWindowOnSelect: false,
    }, this.elRef.nativeElement.firstChild);      
  }

  setMap(map) {
    this.search.set('map', map);
  }
}

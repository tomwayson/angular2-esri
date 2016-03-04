import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';

@Component({
  selector: 'basemap-select',
  template:
  `<select [ngModel]="selectedBasemap" (change)="onSelectChange($event)" class="form-control">
    <option *ngFor="#basemap of basemaps" value="{{basemap.name}}">{{basemap.title}}</option>
  </select>`,
  providers: [MapService]
})
export class BasemapSelect {

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  selectedBasemap = '';

  @Output() basemapSelected = new EventEmitter();

  basemaps: Object[];

  // populate select from available basemap definitions
  ngOnInit() {
    this.basemaps = this._mapService.getBasemaps();
  }

  // notify app when user selects a different basemap
  onSelectChange(e:any) {
    this.basemapSelected.next(e.target.value);
  }
}

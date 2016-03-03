import { Injectable } from 'angular2/core';
import { Map, Search, Legend } from 'esri';

@Injectable()
export class MapService {
  createMap(domNodeOrId: any, options: Object) {
    return new Map(domNodeOrId, options);
  };
  
  createSearch(options: Object, domNodeOrId: any) {
    return new Search(options, domNodeOrId);
  };

  createLegend(options: Object, domNodeOrId: any) {
    return new Legend(options, domNodeOrId);
  }
}

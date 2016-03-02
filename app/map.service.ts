import { Injectable } from 'angular2/core';
import { Map, Search } from 'esri';

@Injectable()
export class MapService {
  createMap(domNodeOrId: any, options: Object) {
    return new Map(domNodeOrId, options);
  };
  
  createSearch(options: Object, domNodeOrId: any) {
    return new Search(options, domNodeOrId);
  };
}

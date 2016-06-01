import { Component} from '@angular/core';
import { MapService } from './map.service';
import {NgFor,NgModel,NgControl} from '@angular/common';

@Component({
  selector: 'esri-layer',
  directives: [NgFor,NgModel],
  template: `
             <form>
              <div class = "form-group">
                    <template ngFor let-legendLayer [ngForOf]="legendLayers">
                      <div>
                          <input
                            type = "checkbox"
                            [(ngModel)]="legendLayer['checked']"
                            (click)="onClick(legendLayer)"/>
                            <label for="legendLayer" >{{legendLayer.name}}</label>
                      </div>
                    </template>
                </div>
              </form>
              `,
  providers: [MapService]
})
export class LayerComponent {
  constructor(private _mapService:MapService) {}
  response: any;
  // temprary used as checkboxs
  legendLayers = [
    {'name': '', 'checked': false}
  ];

  init(response){
    const initialSelection = true; //set all the layers visible
    
    this.response = response;
    
    response.layerInfos.forEach(layerId=>{
      this.legendLayers.push({'name': layerId.title, 'checked': initialSelection});
    })
    this.handleLayerCollection();
  }
  
  //maybe changed in the future
  handleLayerCollection(){
    this.legendLayers.splice(0, 1);
    this.legendLayers.reverse();
  }
  
  onClick(legendLayer) {
     this._mapService.selectLayer(this.response, legendLayer);
  }
  
  ngOnDestroy() {
    if (this.response) {
      this.response.destroy();
    }
  }
}

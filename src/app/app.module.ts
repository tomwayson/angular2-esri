import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';
import { BasemapSelect } from './basemapselect.component';
import { LayerComponent } from './layer.component';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { AppComponent }  from './app.component';

import { MapService } from './map.service';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    MapComponent, 
    SearchComponent, 
    LegendComponent, 
    BasemapSelect, 
    LayerComponent, 
    TabComponent, 
    TabsComponent
  ],
  providers: [
    MapService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaQuadraPage } from './mapa-quadra';

@NgModule({
  declarations: [
    MapaQuadraPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaQuadraPage),
  ],
})
export class MapaQuadraPageModule {}

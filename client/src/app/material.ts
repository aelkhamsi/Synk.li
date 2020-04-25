import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

var materials = [
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule
]

@NgModule({
    imports: materials,
    exports: materials
})
export class MaterialModule {}

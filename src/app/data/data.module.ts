import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { StatusComponent } from './status/status.component';
import { DataComponent } from './data.component';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { AreaComponent } from './area/area.component';


@NgModule({
  declarations: [
    StatusComponent,
    AreaComponent
  ],
  providers: [DataService],
  imports: [
    CommonModule,
    DataRoutingModule
  ]
})
export class DataModule { }

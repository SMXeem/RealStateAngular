import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { DataComponent } from './data.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component: DataComponent 
  ,children:[
    { path: 'status', component: StatusComponent },
    { path: 'area', component: AreaComponent }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }

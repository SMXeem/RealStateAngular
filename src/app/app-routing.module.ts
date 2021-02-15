import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  { path: 'property', component: PropertyComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) }
  // { path: 'my-profile', component: MyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

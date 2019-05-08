import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { WildCardRouteComponent } from './wild-card-route/wild-card-route.component';

const routes: Routes = [
  { path: '', redirectTo: 'default-route', pathMatch: 'full' },
  { path: 'default-route', component: DefaultRouteComponent },
  { path: '**', component: WildCardRouteComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }

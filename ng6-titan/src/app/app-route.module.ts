import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { WildCardRouteComponent } from './wild-card-route/wild-card-route.component';
import { UserComponent } from './user/user.component';
import { ParamsComponent } from './params/params.component';

const routes: Routes = [
  { path: '', redirectTo: 'default-route', pathMatch: 'full' },
  { path: 'default-route', component: DefaultRouteComponent },
  { path: 'users', component: UserComponent },
  { path: 'params/:id', component: ParamsComponent },
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

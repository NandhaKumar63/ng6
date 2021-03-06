import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppCommonModule } from './app-common/app-common.module';
import { AppRouteModule } from './app-route.module';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { WildCardRouteComponent } from './wild-card-route/wild-card-route.component';
import { UserComponent } from './user/user.component';
import { ParamsComponent } from './params/params.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultRouteComponent,
    WildCardRouteComponent,
    UserComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

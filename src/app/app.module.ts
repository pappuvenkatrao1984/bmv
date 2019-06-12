import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVenueComponent } from './modules/venue/add-venue/add-venue.component';
import { ListVenueComponent } from './modules/venue/list-venue/list-venue.component';
import { EditVenueComponent } from './modules/venue/edit-venue/edit-venue.component';
import { PlanEventComponent } from './modules/event/plan-event/plan-event.component';
import { ModifyEventComponent } from './modules/event/modify-event/modify-event.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVenueComponent,
    ListVenueComponent,
    EditVenueComponent,
    PlanEventComponent,
    ModifyEventComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

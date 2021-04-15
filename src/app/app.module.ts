import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivecampaignsComponent } from './live/livecampaigns/livecampaigns.component';
import { PastcampaignsComponent } from './Past/pastcampaigns/pastcampaigns.component';
import { UpcomingcampaignsComponent } from './Upcoming/upcomingcampaigns/upcomingcampaigns.component';
import { PrincingComponent } from './princing/princing.component';

import {MaterialModule} from './material/material/material.module';
import { ViewPrincingComponent } from './view-princing/view-princing.component';
import { ViewActionsComponent } from './view-actions/view-actions.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component'
import { CampaignService } from './campaign.service';
import { DurationPipe } from './pipes/duration.pipe';
import { ViewdateComponent } from './viewdate/viewdate.component';

@NgModule({
  declarations: [
    AppComponent,
    LivecampaignsComponent,
    PastcampaignsComponent,
    UpcomingcampaignsComponent,
    PrincingComponent,
    ViewPrincingComponent,
    ViewActionsComponent,
    ViewCampaignComponent,
    DurationPipe,
    ViewdateComponent
  ],
  entryComponents:[
    PrincingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }

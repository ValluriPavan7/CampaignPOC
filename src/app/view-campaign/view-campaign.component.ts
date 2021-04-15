import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.css']
})
export class ViewCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('campaing-data') campaignData: any;

}

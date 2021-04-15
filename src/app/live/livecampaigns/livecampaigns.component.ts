import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Campaign } from 'src/app/ICampaign';
import { CampaignService } from './../../campaign.service';

@Component({
  selector: 'app-livecampaigns',
  templateUrl: './livecampaigns.component.html',
  styleUrls: ['./livecampaigns.component.css']
})
export class LivecampaignsComponent implements OnInit {

  displayedColumns: string[] = this.CampaignService.displayedColumns;
  dataSource = new MatTableDataSource<Campaign>([]);

  constructor(private CampaignService: CampaignService) { }

  ngOnInit(): void {
    this.getLiveEvents();
  }


  getLiveEvents(){

    let today = this.CampaignService.getTodaysDate();

    this.CampaignService.currentCampaign$.subscribe(data=>{
      this.dataSource.data = data.filter(
        event => this.CampaignService.getDateFromString(event.campaignDate) == today);
    });
  }

}

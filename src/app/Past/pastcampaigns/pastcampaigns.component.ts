import { Campaign } from './../../ICampaign';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignService } from './../../campaign.service';

@Component({
  selector: 'app-pastcampaigns',
  templateUrl: './pastcampaigns.component.html',
  styleUrls: ['./pastcampaigns.component.css']
})
export class PastcampaignsComponent implements OnInit {

  campaignData : Campaign[] = [];
  displayedColumns: string[] = this.CampaignService.displayedColumns;
  dataSource = new MatTableDataSource<Campaign>([]);

  constructor(private CampaignService: CampaignService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getPastEvents();
  }

  getPastEvents(){

    this.CampaignService.currentCampaign$.subscribe(data=>{
      let today = this.CampaignService.getTodaysDate();
      let pastData  = data.filter(
        event => this.CampaignService.getDateFromString(event.campaignDate) < today);
        
        this.dataSource.data = pastData.sort((a, b)=>{
          let condition = (new Date(a.campaignDate) < new Date(b.campaignDate))
          return condition ? 1 : -1;
        });
    });
  }

}

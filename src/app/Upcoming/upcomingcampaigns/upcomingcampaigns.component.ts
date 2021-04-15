import { CampaignService } from './../../campaign.service';
import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/ICampaign';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upcomingcampaigns',
  templateUrl: './upcomingcampaigns.component.html',
  styleUrls: ['./upcomingcampaigns.component.css']
})
export class UpcomingcampaignsComponent implements OnInit {

  displayedColumns: string[] = this.CampaignService.displayedColumns;
  dataSource = new MatTableDataSource<Campaign>([]);

  constructor(private CampaignService: CampaignService) { }

  ngOnInit(): void {
    this.getUpcomingEvents();
  }

  getUpcomingEvents(){

    let today = this.CampaignService.getTodaysDate();

    this.CampaignService.currentCampaign$.subscribe(data=>{ 
      let upcomingData  = data.filter(
        event => this.CampaignService.getDateFromString(event.campaignDate) > today);
        this.dataSource.data = upcomingData.sort((a, b)=>{
          let condition = (new Date(a.campaignDate) < new Date(b.campaignDate))
          return condition ? -1 : 1;
        });
    });
  }

}

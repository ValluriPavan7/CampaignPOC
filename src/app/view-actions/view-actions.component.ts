import { CampaignService } from './../campaign.service';
import { Campaign } from './../ICampaign';
import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-view-actions',
  templateUrl: './view-actions.component.html',
  styleUrls: ['./view-actions.component.css']
})
export class ViewActionsComponent implements OnInit {

  constructor(private campaignService : CampaignService) { }

  ngOnInit(): void {
  }

  @Input('campaign-data') campaignData : Campaign;

  showAlert(text:string){
    alert(`You have selected : ${text}`);
  }

  campaignDateChanged(event: MatDatepickerInputEvent<Date>){
    let month = '' + (event.value.getMonth() + 1); 
    let date = '' + event.value.getDate(); 
    this.campaignData.campaignDate = `${event.value.getFullYear()}-${month.length < 2 ? '0' + month : month}-${date.length < 2 ? '0' + date : date }`;
    this.campaignService.updateCampaigns(this.campaignData);
  }

}

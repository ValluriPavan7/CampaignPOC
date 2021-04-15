import { Campaign } from './ICampaign';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  campaigns : Campaign[] = [];

  private currentCampaignSource = new ReplaySubject<Campaign[]>(1);
  currentCampaign$ = this.currentCampaignSource.asObservable();
  displayedColumns: string[] = ['campaignDate', 'name', 'price', 'csv'];

    constructor(private http : HttpClient) {
      console.log(this.campaigns);
      this.getCampaigns().subscribe();
    }
       
    getCampaigns(){
      return this.http.get<Campaign[]>("../assets/campaign-data.json").pipe(
        map(campaigns => {
          this.currentCampaignSource.next(campaigns);
          return campaigns;
        })
      );    
  }

  updateCampaigns(Campaign : Campaign){

    this.currentCampaign$.subscribe(data =>{
      this.campaigns = data;
    })

    let index = this.campaigns.indexOf(Campaign);
    this.campaigns[index] = Campaign;
    this.currentCampaignSource.next(this.campaigns);
    console.log(this.campaigns);
  }

  getTodaysDate(){
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate()).valueOf();
  }

  getDateFromString(dateString : string){

    let date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).valueOf();
  }
}

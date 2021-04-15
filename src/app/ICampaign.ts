
export interface ICampaign{
  id : Number,
  campaignDate: string;
  name: string;
  region: string;
  price: {
    firstMonth: number;
    sixMonth: number;
    year: number;
  };
  csv: string;
  report: string;
  image_url: string;
}

export class Campaign{
  id: Number;
  campaignDate: string;
  name: string;
  region: string;
  price: { firstMonth: number; sixMonth: number; year: number; };
  csv: string;
  report: string;
  image_url: string;

  get CampaignDate() : Date{
    let date = new Date(this.campaignDate);
    return  new Date(date.getFullYear() , date.getMonth(), date.getDate());
  }

  set CampaignDate(value : Date){
    this.campaignDate = value.toDateString();
  }

}
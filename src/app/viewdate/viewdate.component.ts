import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdate',
  templateUrl: './viewdate.component.html',
  styleUrls: ['./viewdate.component.css']
})
export class ViewdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('campaign-date') campaignDate;

}

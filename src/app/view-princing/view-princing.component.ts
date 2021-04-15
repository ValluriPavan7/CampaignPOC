import { PrincingComponent } from '../princing/princing.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-view-princing',
  templateUrl: './view-princing.component.html',
  styleUrls: ['./view-princing.component.css']
})
export class ViewPrincingComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  @Input('price-data') priceData : any;

  openPricingDialog(){

    this.dialog.open(PrincingComponent, {data : this.priceData});
  }
}

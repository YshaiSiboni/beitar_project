import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SaleCompareDaysService } from '../sale-compare-days.service';

@Component({
  selector: 'app-bar-chart-compare',
  templateUrl: './bar-chart-compare.component.html',
  styleUrls: ['./bar-chart-compare.component.css']
})
export class BarChartCompareComponent implements OnInit {

  dataReceived = false;
  countToday = 0; //count today sales
  countYesterday = 0; //count yesterday sales
  sumToday = 0; //sum today sales
  sumYesterday = 0; //sum yesterday sales

  saleCount = [];
  saleTotal = [];

  colorScheme = {
    domain: ['#F4D03F ', '#58D68D']
  };

  constructor(private saleCompareDaysService: SaleCompareDaysService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.saleCompareDaysService.getSale()
      .subscribe(
        data => {
          let today = new Date();
          let yesterday = new Date();
          let finalYesterday = formatDate(yesterday.setDate(today.getDate() - 1), 'yyyy-MM-dd','en-US');
          console.log(finalYesterday);
          let finalToday = formatDate(today, 'yyyy-MM-dd','en-US');
          console.log(finalToday);
          console.log(this.dataReceived);
          console.log(data);
          let dataCompare = data['body'].map(data => [data.issue_date, data.total])
          for (let i = 0; i < dataCompare.length; i++) {
            dataCompare[i][0] = formatDate(dataCompare[i][0], 'yyyy-MM-dd','en-US')
          }
          console.log(dataCompare);
          for (let i = 0; i < dataCompare.length; i++) {
            if (dataCompare[i][0] == finalToday) {
              this.countToday = this.countToday + 1;
              this.sumToday = this.sumToday + Number(dataCompare[i][1]);
            }
            else if (dataCompare[i][0] == finalYesterday) {
              this.countYesterday = this.countYesterday + 1;
              this.sumYesterday = this.sumYesterday + Number(dataCompare[i][1]);
            }
          }
          
          this.saleCount.push(
            { name: `Today Sales ${finalToday}`, value: this.countToday },
            { name: `Yesterday Sales ${finalYesterday}`, value: this.countYesterday },
          )

          this.saleTotal.push(
            { name: `Today Sales ${finalToday}`, value: this.sumToday },
            { name: `Yesterday Sales ${finalYesterday}`, value: this.sumYesterday },
          )
          this.dataReceived = true;
          /*console.log(this.countToday);
          console.log(this.sumToday);
          console.log(this.countYesterday);
          console.log(this.sumYesterday);*/
          console.log(this.dataReceived);
        }
      )
  }
}

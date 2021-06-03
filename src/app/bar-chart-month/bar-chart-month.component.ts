import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SaleCompareMonthService } from '../sale-compare-month.service';

@Component({
  selector: 'app-bar-chart-month',
  templateUrl: './bar-chart-month.component.html',
  styleUrls: ['./bar-chart-month.component.css']
})
export class BarChartMonthComponent implements OnInit {

  dataReceived = false;
  sumCurrMonth = 0; //sum today sales
  sumLastMonth = 0; //sum yesterday sales

  saleMonthTotal = [];

  colorScheme = {
    domain: ['#F4D03F ', '#58D68D']
  };

  constructor(private saleCompareMonthService: SaleCompareMonthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.saleCompareMonthService.getSale()
      .subscribe(
        data => {
          let date = new Date();
          let currMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
          let lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
          let finalLastMonth = formatDate(lastMonth, 'yyyy-MM-dd','en-US'); //first day of last month
          let finalCurrMonth = formatDate(currMonth, 'yyyy-MM-dd','en-US'); //last day of this month
          let lastMonthNo = lastMonth.getMonth(); //Last month number
          let currMonthNo = currMonth.getMonth(); // current month number
          console.log(finalCurrMonth);
          console.log(currMonthNo);
          console.log(finalLastMonth);
          console.log(lastMonthNo);
          console.log(this.dataReceived);
          console.log(data);
          let mNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
          let dataCompare = data['body'].map(data => [data.issue_date, data.total]);
          //console.log(dataCompare);
          for (let i = 0; i < dataCompare.length; i++) {
            let d = new Date(dataCompare[i][0]);  //converts the string into date object
            let m = d.getMonth(); //get the value of month
            dataCompare[i][0] = m;
          }
          //console.log(dataCompare);
          for (let i = 0; i < dataCompare.length; i++) {
            if (dataCompare[i][0] == lastMonthNo) {
              this.sumLastMonth = this.sumLastMonth + Number(dataCompare[i][1]);
            }
            else if (dataCompare[i][0] == currMonthNo) {
              this.sumCurrMonth = this.sumCurrMonth + Number(dataCompare[i][1]);
            }
          }
          this.saleMonthTotal.push(
            { name: `${mNames[currMonthNo]} Sales`, value: this.sumCurrMonth },
            { name: `${mNames[lastMonthNo]} Sales `, value: this.sumLastMonth },
          )
          this.dataReceived = true;
          console.log(this.saleMonthTotal);
          console.log(this.dataReceived);
        }
      )
  }
}

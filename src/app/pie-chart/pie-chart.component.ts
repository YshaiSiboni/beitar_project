import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  dataReceived = false;
  sumJan = 0; //sum January sales
  sumFeb = 0; //sum February sales
  sumMar = 0; //sum March sales
  sumAp = 0; //sum April sales
  sumMay = 0; //sum May sales
  sumJun = 0; //sum June sales
  sumJul = 0; //sum July sales
  sumAug = 0; //sum August sales
  sumSep = 0; //sum September sales
  sumOc = 0; //sum October sales
  sumNov = 0; //sum November sales
  sumDec = 0; //sum December sales

  saleMonthTotal = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.saleService.getSale().subscribe(
      data => {
        console.log(this.dataReceived);
        //console.log(data);
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
          if (dataCompare[i][0] == 0) {
            this.sumJan = this.sumJan + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 1) {
            this.sumFeb = this.sumFeb + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 2) {
            this.sumMar = this.sumMar + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 3) {
            this.sumAp = this.sumAp + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 4) {
            this.sumMay = this.sumMay + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 5) {
            this.sumJun = this.sumJun + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 6) {
            this.sumJul = this.sumJul + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 7) {
            this.sumAug = this.sumAug + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 8) {
            this.sumSep = this.sumSep + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 9) {
            this.sumOc = this.sumOc + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 10) {
            this.sumNov = this.sumNov + Number(dataCompare[i][1]);
          }
          else if (dataCompare[i][0] == 11) {
            this.sumDec = this.sumDec + Number(dataCompare[i][1]);
          }
        }
        this.saleMonthTotal.push(
          { name: `${mNames[0]}`, value: this.sumJan.toFixed(2) },
          { name: `${mNames[1]}`, value: this.sumFeb.toFixed(2) },
          { name: `${mNames[2]}`, value: this.sumMar.toFixed(2) },
          { name: `${mNames[3]}`, value: this.sumAp.toFixed(2) },
          { name: `${mNames[4]}`, value: this.sumMay.toFixed(2) },
          { name: `${mNames[5]}`, value: this.sumJun.toFixed(2) },
          { name: `${mNames[6]}`, value: this.sumJul.toFixed(2) },
          { name: `${mNames[7]}`, value: this.sumAug.toFixed(2) },
          { name: `${mNames[8]}`, value: this.sumSep.toFixed(2) },
          { name: `${mNames[9]}`, value: this.sumOc.toFixed(2) },
          { name: `${mNames[10]}`, value: this.sumNov.toFixed(2) },
          { name: `${mNames[11]}`, value: this.sumDec.toFixed(2) },
        )
        this.dataReceived = true;
        console.log(this.saleMonthTotal);
        console.log(this.dataReceived);

      }
    )
  }

}

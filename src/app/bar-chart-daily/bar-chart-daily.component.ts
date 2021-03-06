import { Component, OnInit } from '@angular/core';
import { SaleTodayService } from '../sale-today.service';

@Component({
  selector: 'app-bar-chart-daily',
  templateUrl: './bar-chart-daily.component.html',
  styleUrls: ['./bar-chart-daily.component.css']
})
export class BarChartDailyComponent implements OnInit {

  countA = 0; // Internet Shop - 3480
  countB = 0; // Bait Vegan Shop - 3741 or 3841
  countC = 0; // Teddy East - 3739
  countD = 0; // Teddy West - 3740

  ownerCount = [];
  dataReceived = false;

  colorScheme = {
    domain: ['#F4D03F ', '#58D68D', '#E74C3C', '#2874A6']
  };

  constructor(private saleTodayService: SaleTodayService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.saleTodayService.getSale().subscribe(
      data => {
        console.log(data);
        let owner = data['body'].map(data => data.owner)
        console.log(this.dataReceived);
        for(let i = 0; i < owner.length; i++){
          if(owner[i] == 3480){
            this.countA =this.countA+1;
          }
          else if(owner[i] == 3741 || owner[i] == 3841){
            this.countB = this.countB+1;
          }
          else if(owner[i] == 3739){
            this.countC =this.countC+1;
          }
          else if(owner[i] == 3740){
            this.countD = this.countD+1;
          }
        }
        this.ownerCount.push(
          { name: "Internet", value: this.countA },
          { name: "Bayit VeGan", value: this.countB },
          { name: "Teddy East", value: this.countC },
          { name: "Teddy West", value: this.countD },
        )
        this.dataReceived = true;
        console.log(this.ownerCount);
        console.log(this.dataReceived);
      }
    )
  }

}

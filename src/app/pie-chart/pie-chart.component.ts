import { SaleCompareMonthService } from './../sale-compare-month.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(private saleCompareMonthService: SaleCompareMonthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.saleCompareMonthService.getSale().subscribe(
      data => {
        console.log(data);
      }
    )
  }

}

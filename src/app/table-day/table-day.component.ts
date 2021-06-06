import { SaleCompareDaysService } from './../sale-compare-days.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleByCustomer } from '../interfaces/sale-by-customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';

@Component({
  selector: 'app-table-day',
  templateUrl: './table-day.component.html',
  styleUrls: ['./table-day.component.css']
})
export class TableDayComponent implements OnInit {

  resp;
  ELEMENT_DATA: SaleByCustomer[] = [];
  displayedColumns: string[] = ['doctype','owner','company', 'issue_date', 'total'];
  dataSource = new MatTableDataSource<SaleByCustomer>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort:MatSort;

  docDict = {3: "מס", 9:"מס - קבלה"};
  ownerDict = {3741: "בית וגן", 3480: "חנות אינטרנט", 3740: "טדי מערבי", 3739: "טדי מזרחי", 3841: "בית וגן"};


  constructor(private saleCompareDaysService: SaleCompareDaysService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.resp = this.saleCompareDaysService.getSale().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<SaleByCustomer>(data.body as SaleByCustomer[]);
        this.dataSource.paginator = this.paginator;
        this.sort.sort(({ id: 'issue_date', start: 'desc'}) as MatSortable);
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
        console.log(this.dataSource.data);
      }
    )
  }

}
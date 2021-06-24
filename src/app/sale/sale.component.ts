import { element } from 'protractor';
import { SaleService } from './../sale.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleByCustomer } from '../interfaces/sale-by-customer';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe, formatDate } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FullPurchaseDialogComponent } from '../full-purchase-dialog/full-purchase-dialog.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  resp;
  ELEMENT_DATA: SaleByCustomer[] = [];
  displayedColumns: string[] = ['doctype','owner','company', 'issue_date', 'total', 'details'];
  dataSource = new MatTableDataSource<SaleByCustomer>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort:MatSort;
  pipe: DatePipe;

  docDict = {3: "מס", 9:"מס - קבלה"};
  ownerDict = {3741: "בית וגן", 3480: "חנות אינטרנט", 3740: "טדי מערבי", 3739: "טדי מזרחי", 3841: "בית וגן"};

  dataLoaded = false;

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  get fromDate() { return this.filterForm.get('fromDate'); }
  get toDate() { return this.filterForm.get('toDate'); }

  constructor(private saleService: SaleService, public dialog:MatDialog) {
    this.pipe = new DatePipe('en');
    console.log(this.dataSource.filterPredicate);
    const defaultPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data, filter) => {
      const formatted = this.pipe.transform(data.issue_date, 'MM/dd/yyyy');
      return formatted.indexOf(filter) >= 0 || defaultPredicate(data, filter);
    } 
  }

  getDateRange(value) {
    console.log(this.dataSource.data);
    // getting date from calendar
    const fromDate = formatDate( value.fromDate,'MM/dd/yyyy','en-US');
    const toDate = formatDate( value.toDate,'MM/dd/yyyy','en-US');
    this.dataSource.data = this.dataSource.data.filter(e => {
     return formatDate( e.issue_date,'MM/dd/yyyy','en-US') >= fromDate && formatDate( e.issue_date,'MM/dd/yyyy','en-US') <= toDate;
    });
    console.log(fromDate, toDate);
    console.log(this.dataSource.data);
  }

  refreshTable() {
    window.location.reload();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  purchase: SaleByCustomer[]=[]

  openDialog(purchase): void {
    // this.purchase = purchase;
    let dialogRef = this.dialog.open(FullPurchaseDialogComponent, {
      data: purchase
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('This Purchase Details was closed');
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.resp = this.saleService.getSale().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<SaleByCustomer>(data.body as SaleByCustomer[]);
        this.dataSource.paginator = this.paginator;
        this.sort.sort(({ id: 'issue_date', start: 'desc'}) as MatSortable);
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
        this.dataLoaded = true;
      }
    )
  }
}

import { AccountService } from './../account.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from '../interfaces/account';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountData$: Observable<Account>;

  resp;
  ELEMENT_DATA: Account[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'city'];
  dataSource = new MatTableDataSource<Account>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort:MatSort;

  /* getAccountData(){
     this.resp = this.accountService.getAccount().subscribe(
       data => this.dataSource = new MatTableDataSource<Account>(data.body as Account[])
     )
   }
 */

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.resp = this.accountService.getAccount().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Account>(data.body as Account[]);
        this.dataSource.paginator = this.paginator;
        this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      }
    )
  }


}

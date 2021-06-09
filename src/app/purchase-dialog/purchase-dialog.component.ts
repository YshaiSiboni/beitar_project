import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableDayComponent } from '../table-day/table-day.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.css']
})
export class PurchaseDialogComponent implements OnInit {

  displayedColumns: string[] = ['name','iItem','qty','iTotalVat'];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialogRef: MatDialogRef<TableDayComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
    

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    console.log(this.data);
  }
  

}

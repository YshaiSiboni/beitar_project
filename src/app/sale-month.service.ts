import { SaleByCustomer } from './interfaces/sale-by-customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleMonthService {

  private URL = environment.linetProxy;

  getSale() {
    let date = new Date();
    let firstMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let finalFirstMonth = formatDate(firstMonth, 'yyyy-MM-dd','en-US');
    let finalLastMonth = formatDate(lastMonth, 'yyyy-MM-dd','en-US');
    let json = {
      "login_id": "g69Y1M_5JXnNACN8HdJ8CrGh0774XP-a",
      "login_hash": "IbcLOnlWWclb2eb0Df4qxwdF_LiTfRjD",
      "login_company": "2",
      "query": {"doctype":[3,9], "refstatus":[0,1], "issue_date":`${finalFirstMonth} to ${finalLastMonth}`}
    }
    let body = JSON.stringify(json); //text to input in internet
    //console.log(finalFirstMonth);
    //console.log(finalLastMonth);
    return this.http.post<any>(this.URL, body)
  }

  addSale(id:number,company:string,doctype:number,owner:number,date:Date,total:number){
    const sale = {company:company,owner:owner,doctype:doctype,date:date,total:total};
    this.db.doc(`sales/${id}`).set(sale);
  }


  constructor(private http: HttpClient, private db:AngularFirestore) { }
}


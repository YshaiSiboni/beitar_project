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
export class SaleService {

  private URL = environment.linetProxy;

  getSale() {
    let first = new Date(new Date().getFullYear(), 0, 1);
    let last = new Date(new Date().getFullYear(), 11, 31);
    let firstDay = formatDate(first, 'yyyy-MM-dd','en-US');
    let lastDay = formatDate(last, 'yyyy-MM-dd','en-US');
    let json = {
      "login_id": "g69Y1M_5JXnNACN8HdJ8CrGh0774XP-a",
      "login_hash": "IbcLOnlWWclb2eb0Df4qxwdF_LiTfRjD",
      "login_company": "2",
      "query": {"doctype":[3,9], "refstatus":[0,1], "issue_date":`${firstDay} to ${lastDay}`}
    }
    let body = JSON.stringify(json); //text to input in internet
    //console.log(firstDay);
    //console.log(lastDay);
    return this.http.post<any>(this.URL, body)
  }

  addSale(id:number,company:string,doctype:number,owner:number,date:Date,total:number){
    const sale = {company:company,owner:owner,doctype:doctype,date:date,total:total};
    this.db.doc(`sales/${id}`).set(sale);
  }


  constructor(private http: HttpClient, private db:AngularFirestore) { }
}

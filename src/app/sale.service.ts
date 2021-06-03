import { SaleByCustomer } from './interfaces/sale-by-customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private URL = "https://app.linet.org.il/api/docsearch/docs";

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

  constructor(private http: HttpClient) { }
}

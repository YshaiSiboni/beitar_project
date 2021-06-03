import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleCompareMonthService {

  private URL = "https://app.linet.org.il/api/docsearch/docs";

  getSale() {
    let date = new Date();
    let currMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    let finalLastMonth = formatDate(lastMonth, 'yyyy-MM-dd','en-US');
    let finalCurrMonth = formatDate(currMonth, 'yyyy-MM-dd','en-US');
    //console.log(finalYesterday);
    let json = {
      "login_id": "g69Y1M_5JXnNACN8HdJ8CrGh0774XP-a",
      "login_hash": "IbcLOnlWWclb2eb0Df4qxwdF_LiTfRjD",
      "login_company": "2",
      "query": {"doctype":[3,9], "refstatus":[0,1], "issue_date":`${finalLastMonth} to ${finalCurrMonth}`}
    }
    let body = JSON.stringify(json); //text to input in internet
    //console.log(finalCurrMonth);
    //console.log(finalLastMonth);
    return this.http.post<any>(this.URL, body)
  }

  constructor(private http: HttpClient) { }
}

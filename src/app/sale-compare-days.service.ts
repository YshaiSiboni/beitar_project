import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleCompareDaysService {

  private URL = environment.linetProxy;

  getSale() {
    let today = new Date();
    let yesterday = new Date();
    let finalYesterday = formatDate(yesterday.setDate(today.getDate() - 1), 'yyyy-MM-dd','en-US');
    let finalToday = formatDate(today, 'yyyy-MM-dd','en-US');
    //console.log(finalYesterday);
    let json = {
      "login_id": "g69Y1M_5JXnNACN8HdJ8CrGh0774XP-a",
      "login_hash": "IbcLOnlWWclb2eb0Df4qxwdF_LiTfRjD",
      "login_company": "2",
      "query": {"doctype":[3,9], "refstatus":[0,1], "issue_date":`${finalYesterday} to ${finalToday}`}
    }
    let body = JSON.stringify(json); //text to input in internet
    return this.http.post<any>(this.URL, body)
  }

  constructor(private http: HttpClient) { }
}

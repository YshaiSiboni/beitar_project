import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private URL = "https://app.linet.org.il/api/docsearch/docs";

  getSale() {
    let json = {    "login_id": "g69Y1M_5JXnNACN8HdJ8CrGh0774XP-a",
    "login_hash": "IbcLOnlWWclb2eb0Df4qxwdF_LiTfRjD",
    "login_company": "2",
    "query":{"doctype":  [3,4,9] }
  }
    let body = JSON.stringify(json); //text to input in internet
    return this.http.post<any>(this.URL, body)
  }

  constructor(private http: HttpClient) { }
}

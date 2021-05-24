import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  

  private URL = "https://app.linet.org.il/api/newsearch/accounts";

  getAccount() {
    let json = {    "login_id": "g69Y1M_5JXnNACN8HdJ8CrGh0774XP-a",
    "login_hash": "IbcLOnlWWclb2eb0Df4qxwdF_LiTfRjD",
    "login_company": "2"}
    let body = JSON.stringify(json); //text to input in internet
    return this.http.post<any>(this.URL, body)
  }
  
  constructor(private http: HttpClient) { }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user:Observable <User | null>
  
  constructor(public authAf:AngularFireAuth) {
    this.user = this.authAf.authState;
   }

  ngOnInit(): void {
  }

}

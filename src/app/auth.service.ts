import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable <User | null>

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  signUp(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  logout(){
    this.afAuth.signOut().then(
      res => {
        this.router.navigate(['/'])
      }
    );  
  }

  getUser(): Observable <User | null> {
    return this.user;
  }

  constructor(private afAuth:AngularFireAuth, private router:Router) { 
    this.user = this.afAuth.authState;
  }
}

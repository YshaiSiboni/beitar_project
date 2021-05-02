import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  errorMessage:string;
  isError:boolean = false;

  onSubmit(){
    this.auth.login(this.email,this.password)
    .then(res => {
      console.log('Succesful Login',res);
      this.router.navigate(['/welcome']);
    }
    )
    .catch(error => {
      console.log(error);
      this.isError = true;
      this.errorMessage = error.message;
    })
  }

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  username = "padua";
  password = "ok";
  errorMessage = "invalid Credentials!"
  invalidLogin = false;
  
  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) {

  }

  ngOnInit() {

  }
  
  handleLogin() {

    if(this.basicAuthenticationService.authenticate(this.username, this.password) ){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => { 
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      }, 
        error => { 
        this.invalidLogin = true;
      }
      )
}
}

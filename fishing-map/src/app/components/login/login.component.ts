import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor( private _fbServices: FirebaseService,
               private router: Router ) {
    
  }

  ngOnInit(): void {
  }

  login(){

    return this._fbServices.login().then(()=> this.router.navigate(['/']))
  }

}

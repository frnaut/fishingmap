import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from '../providers/firebase.service';

@Injectable({
  providedIn: 'root'
})

export class FirebaseGuard implements CanActivate {
  
  user;
  constructor( private _fbSevices: FirebaseService,
               private router: Router){
  }

  canActivate(): boolean {
    if(localStorage.getItem('idToken').length < 5){
      return false;
    }else{
      return true;
    }
      
  }
  
}

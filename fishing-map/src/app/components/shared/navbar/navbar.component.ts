import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'fishing-map';
  mobileQuery: MediaQueryList;
  user;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, 
              private media: MediaMatcher,
              private _fbServices: FirebaseService,
              private router: Router) {
    
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    _fbServices.user.subscribe(resp => {
      this.user = resp
    })

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logOut(){

    return this._fbServices.logOut().then(()=> this.router.navigate(['login']))
  }
  shouldRun = true;

}

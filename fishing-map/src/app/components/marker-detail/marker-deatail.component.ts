import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/models/marker.interface';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marker-deatail',
  templateUrl: './marker-deatail.component.html',
  styleUrls: ['./marker-deatail.component.css']
})
export class MarkerDeatailComponent implements OnInit {

  marker: Marker = {latitud: null, longitud: null, img: []};
  
  constructor( private _router: Router, private _fbServices: FirebaseService ) { }

  ngOnInit(): void {
    let id; 
    let url = this._router.url;
    id = url.split("/")
  
    this._fbServices.getMarker(id[2]).subscribe((resp: Marker) =>{
      this.marker = resp
      
      for(let img of this.marker.img){
        console.log(img)
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/models/marker.interface';
import { FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  markers: Marker[] = [];
  markerList: Marker[] = [];
  text = '';

  constructor( private _fbServices: FirebaseService ) { }

  ngOnInit(): void {
    this._fbServices.getMarkers().subscribe( (resp: Marker[]) => {
      this.markers = resp;
    })
  }

  search(){
    if(this.text.length == 0){
      this.markerList = [];
      return;
    }
      this.markerList = [];
      this.markers.forEach(resp => {
        resp.titulo = resp.titulo.toLowerCase();
        this.text = this.text.toLowerCase();
        if(resp.titulo.match(this.text)){
          this.markerList.push(resp);
        }
      })
  }
  
  clear(){
    this.text = '';
    this.markerList = [];
  }
}

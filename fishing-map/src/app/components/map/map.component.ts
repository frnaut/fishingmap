import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';
import { FirebaseService } from './../../providers/firebase.service';
import { Marker } from 'src/app/models/marker.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: leaflet.map;
  markers: leaflet.marker[] = [];

  markerList: Marker [] = [];

  constructor( public _fbService : FirebaseService ) {
   
    
  }

  ngOnInit(): void {
    
    this.mapa();
    
    this._fbService.getMarkers().subscribe((resp: Marker[])=>{
      this.markerList = resp;
      
      this.markerList.forEach(resp =>{ 
        this.addMarker(resp.latitud,resp.longitud)
        this.markerInMap();
      })
    })
    
  }

  newMarker(event: Event): void{
    debugger
    
    if(event.eventPhase != 0){
      var marker: Marker = {
        latitud: null,
        longitud: null
      }
      
  
      this.map.on('click', e =>{
        let latlng: { lat:number, lng:number } = this.map.mouseEventToLatLng(e.originalEvent);
        
        marker.latitud = latlng.lat;
        marker.longitud = latlng.lng;
        console.log('**********')
        console.log(event.eventPhase)
        // console.log(marker)
        // this._fbService.addMarkers(marker);
      })
    }
    
  }


  addMarker( x: number, y: number ) : void{
    let marker = leaflet.marker([x, y])
    this.markers.push(marker) 
  }

  
  markerInMap() : void{
    this.markers.forEach((marker)=>{
      marker.addTo(this.map)
      marker.bindPopup('Este es un marcador')
    });
  }


  mapa() : void {
    this.map = leaflet.map('map').setView([18.4359323, -69.9907653], 7);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 16,
    tileSize: 512,
    zoomOffset: -1,
    }).addTo(this.map);
  }

}

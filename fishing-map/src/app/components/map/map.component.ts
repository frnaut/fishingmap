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
  markers: any[] = [];

  markerList: Marker [] = [];

  constructor( public _fbService : FirebaseService ) {
    
  }

  ngOnInit(): void {
    
    this.mapa();
    this.newMarker(); 
    this._fbService.getMarkers().subscribe((resp: Marker[])=>{
      
      this.markerList = resp;
      
      this.markerList.forEach(resp =>{ 
        this.addMarker(resp.latitud,resp.longitud, resp.id)
        this.markerInMap();
      })
    })
        
  }

  

  editar(){
    console.log('funciona')
  }

  markerInMap() : void{
    this.markers.forEach((marker)=>{
      marker.addTo(this.map)
      marker.bindPopup(`<a class="btn btn-success text-light" href="/edit/${marker.id}" > Editar </a>
      <a class="btn btn-info text-light" href="/marker/${marker.id}" > Ver </a>
      `)

    });
  }

  newMarker(): void{
  
    var marker: Marker = {
      latitud: null,
      longitud: null,
    }

    this.map.on('click', e =>{
      let latlng: { lat:number, lng:number } = this.map.mouseEventToLatLng(e.originalEvent);
      
      marker.latitud = latlng.lat;
      marker.longitud = latlng.lng;
      marker.img = [];
      marker.titulo = "";
      this._fbService.addMarkers(marker);
    })
  }


  addMarker( x: number, y: number, id ) : void{
    let marker = leaflet.marker([x, y])
    marker.id = id;
    this.markers.push(marker) 
  }


  mapa() : void {
    this.map = leaflet.map('map').setView([18.4359323, -69.9907653], 7);

    leaflet.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 16,
    tileSize: 512,
    zoomOffset: -1,
    }).addTo(this.map);
  }
  
  // https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png	

}

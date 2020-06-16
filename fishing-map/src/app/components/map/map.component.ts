import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: leaflet.map;
  markers: leaflet.marker[] = [];

  constructor() { }

  ngOnInit(): void {
    this.map = leaflet.map('map').setView([18.4359323, -69.9907653], 7);

    // nota
    // s = a, b, c
    // x, y = coordenadas
    // z = zoom

    leaflet.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 20,
    tileSize: 512,
    zoomOffset: -1,
    }).addTo(this.map);

    this.addMarker(18.4359323,-69.9907653);
    this.addMarker(19.4359330,-70.9907660);
    this.markerInMap();
  }

  addMarker( x: number, y: number ){
    let marker = leaflet.marker([x, y])
    this.markers.push(marker)
    // addTo(this.map)
  }

  markerInMap(){

    this.markers.forEach((marker)=>{
      marker.addTo(this.map)
      marker.bindPopup('Este es un marcador')
    })

  }


}

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
  delete = false;
  image: string;  
  open = false;

  constructor( private _router: Router, private _fbServices: FirebaseService ) { }

  ngOnInit(): void {
    let id;
    let url = this._router.url;
    id = url.split("/")
  
    this._fbServices.getMarker(id[2]).subscribe((resp: Marker) =>{
      this.marker = resp
    })
  }

  deleteImage(url: string, id: number, mk: Marker){
    let result = confirm("¿Esta seguro que desea eliminar la imagen?");
    if(result){
      this._fbServices.deleteImage(url).subscribe(()=>{
        this.marker.img.splice(id, 1)
        this._fbServices.updateMarker(this.marker).then(()=>{
          this.delete = true;
          setTimeout(()=>{
            this.delete = false;
          }, 3000)
        })
      }) 
    }
    return;
  }

  openImages(url: string){
    this.image = url;
    this.open = true
  }

  closeImage(){
    this.open = false;
  }

}

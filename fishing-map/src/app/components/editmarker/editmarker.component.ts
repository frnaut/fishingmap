import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/models/marker.interface';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ImageInteface } from 'src/app/models/image.interface';

@Component({
  selector: 'app-editmarker',
  templateUrl: './editmarker.component.html',
  styleUrls: ['./editmarker.component.css']
})
export class EditmarkerComponent implements OnInit {

  marker: Marker = {latitud: null, longitud: null, img: []};
  images: ImageInteface[] = [];
  img: ImageInteface = {mbTotal: 0, mbProgres: 0}
  subida: number;
  mbTotal = 0;
  mbProgres = 0;
  saved = false;
  uploaded = false;

  constructor( private _fbServices: FirebaseService,
               private _router: Router
  ){  
  }

  ngOnInit(): void {
    let id; 
    let url = this._router.url;
    id = url.split("/")
    
    this._fbServices.getMarker(id[2]).subscribe((resp: Marker) =>{
      this.marker = resp
      this.images = this.marker.img;
    })
  }


  UpluadImage(event){
    this._fbServices.uploadImages(event).subscribe((resp: any) => {
      this.img.mbProgres = (resp['bytesTransferred'] /1024) /1024;
      this.img.mbTotal = (resp['totalBytes'] /1024) /1024;
      const url = resp['ref'].location.path;
      

      if(this.img.mbProgres == this.img.mbTotal){

        setTimeout(()=>{
          this._fbServices.getImage(url).subscribe(resp => {
              this.images = [];
              this.images = this.marker.img;
              this.img.nombre = url;
              this.img.file = resp;
              this.img.mbProgres = null;
              this.img.mbTotal = null;
              this.images.unshift(this.img)
              this.marker.img = this.images;
              this._fbServices.updateMarker(this.marker);
              
              this.uploaded = true;
              setTimeout(() => {
                this.uploaded = false;  
              }, 2000);
    
              return;
          })

        }, 2000)
      }

      
    })
  }

  editMarker(form: NgForm){
    if(form.valid){
      this._fbServices.updateMarker(this.marker)
      this.saved = true;

      setTimeout(() => {
        this.saved = false;
      }, 2000);
    }
  }
}

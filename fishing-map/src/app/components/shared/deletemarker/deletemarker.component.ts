import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { Router } from '@angular/router';
import { Marker } from 'src/app/models/marker.interface';

@Component({
  selector: 'app-deletemarker',
  templateUrl: './deletemarker.component.html',
  styleUrls: ['./deletemarker.component.css']
})
export class DeletemarkerComponent implements OnInit {

  id;
  constructor( private _router: Router, private _fbServices: FirebaseService ) { 
    let url = this._router.url;
    this.id = url.split("/")
  }

  ngOnInit(): void {
  }

  delete(){
    
    const result = confirm("¿Esta seguro?");

    if(result){

      this._fbServices.getMarker(this.id[2]).subscribe((resp: Marker) => {
        const marker = resp;
        
        if(marker.img.length > 0){
          marker.img.forEach(resp =>{
            this._fbServices.deleteImage(resp.nombre)
          })
        }
  
        this._fbServices.deleteMarker(marker.id);
        this._router.navigate(['/'])
      })

    }

    return;
  }

}

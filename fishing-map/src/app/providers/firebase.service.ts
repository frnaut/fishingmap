import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage  } from '@angular/fire/storage';
import { Marker } from '../models/marker.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
    ) { }

  getMarkers(){
    return this.firestore.collection('map').valueChanges();
  }

  getMarker(id: string){
    return this.firestore.collection('map').doc(id).valueChanges();
  }

  addMarkers( marker: Marker ){
    return this.firestore.collection('map').add(marker).then((resp) =>{
      marker.id = resp.id;
      this.firestore.collection('map').doc(resp.id).update(marker)
    })
  }

  updateMarker(marker: Marker){
    return this.firestore.collection('map').doc(marker.id).update(marker);
  }

  uploadImages(event){
    const file = event.target.files[0]; 
    let name = Date.now()
    return this.storage.upload(`img/${name.toString()}`, file).snapshotChanges();
  }

  getImage(url: string){
    return this.storage.ref(url).getDownloadURL();
  }

  deleteImage(url: string){
    return this.storage.ref(url).delete();
  }
}

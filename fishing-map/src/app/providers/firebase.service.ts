import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Marker } from '../models/marker.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getMarkers(){
    return this.firestore.collection('map').valueChanges();
  }

  addMarkers( marker: Marker ){
    return this.firestore.collection('map').add(marker);
  }

}

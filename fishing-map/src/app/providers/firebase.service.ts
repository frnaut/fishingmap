import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage  } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Marker } from '../models/marker.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public user: Observable<any>;
  
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private fireAuth: AngularFireAuth
    ) { 
        this.user = fireAuth.user;
        
  }

  
  login(){
    return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(resp =>{
      localStorage.setItem('idToken', resp.credential['idToken'])
      localStorage.setItem('email', resp.user.email)
    })
  }

  logOut(){
    localStorage.setItem('idToken', '')
    return this.fireAuth.signOut();
  }
  
  getMarkers(){
    const email = localStorage.getItem('email');
    return this.firestore.collection(email).valueChanges();
  }

  getMarker(id: string){
    const email = localStorage.getItem('email');
    return this.firestore.collection(email).doc(id).valueChanges();
  }

  addMarkers( marker: Marker ){
    const email = localStorage.getItem('email');
    return this.firestore.collection(email).add(marker).then((resp) =>{
      marker.id = resp.id;
      this.firestore.collection(email).doc(resp.id).update(marker)
    })
  }

  updateMarker(marker: Marker){
    const email = localStorage.getItem('email');
    return this.firestore.collection(email).doc(marker.id).update(marker);
  }

  uploadImages(event){
    const email = localStorage.getItem('email');
    const file = event.target.files[0]; 
    let name = Date.now()
    return this.storage.upload(`${email}/img/${name.toString()}`, file).snapshotChanges();
  }

  getImage(url: string){
    return this.storage.ref(url).getDownloadURL();
  }

  deleteImage(url: string){
    return this.storage.ref(url).delete();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FirebaseModule } from './modules/firebase/firebase.module';

import { MarkerDeatailComponent } from './components/marker-detail/marker-deatail.component';
import { HomeComponent } from './components/home/home.component';
import { EditmarkerComponent } from './components/editmarker/editmarker.component';
import { SearchComponent } from './components/search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarkerDeatailComponent,
    HomeComponent,
    EditmarkerComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirebaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
